 const texto = document.querySelector('#texto1');
 const pills = document.querySelector('#pills');
 const bluePill = document.getElementById('blue-pill');
 const redPill = document.getElementById('red-pill');
 const rabbit = document.querySelector('#rabbit');
 const bodyy = document.getElementById('body');
 const bgreloaded = document.getElementById('bgreloaded');
 

 




 
// Escreve o texto



const frase1 = 'Acorde, Escolhido..'
const frase2 = 'A Matrix pegou você..'
const frase3 = 'Siga o coelho branco..'
const newfrase = [...frase1,...frase2,...frase3]
// console.log(newfrase.length);

escreveTexto(newfrase)
chamaCoelho()

  

  function escreveTexto (array=[]){
    texto.innerHTML=''

    array.forEach((letra,i)=>{
      
      setTimeout(() => {
        texto.innerHTML += letra

        if(i === 18 || i === 39){
          texto.innerHTML=''
         
        }else if(i === 61){
          texto.style.display ='none'

        }
        
      }, i*180);
     
      
    })


  }


 

// //  coelho entra
function animacaoCoelho(){
   const chamaCoelho = setTimeout( () => {
    bgreloaded.style.height='250vh';
    bodyy.style.overflow='visible'
    rabbit.style.display = 'flex'
    
    
  },  12000);

  const someCoelho = setTimeout( () => {
    rabbit.style.display = 'none'
    bodyy.style.overflow='hidden'
    
  },  15000);
}









//  pills-entra
setTimeout( () => {

  pills.style.display = 'flex';
 
  
},  15000);

 
// matrix entra ao clicar nas pills

bluePill.addEventListener("click", function displayOnCanvas (){


  if (pills.style.display = 'flex') {
    pills.style.display = 'none';
    canvas.style.display = 'flex'
    
  }
  

});



// CANVAS \/

  //const
  const canvas = document.getElementById('canv');
  const ctx = canvas.getContext('2d');
  const w = canvas.width = document.body.offsetWidth;
  const h = canvas.height = document.body.offsetHeight;
  const cols = Math.floor(w/20) +1;
  const yPos = Array(cols).fill(0);


  //ctx

  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,w,h);

// functions
  function DesenhaMatrix(){
      ctx.fillStyle = '#0001';
      ctx.fillRect(0,0,w,h);

      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace' 


      yPos.forEach((y,ind) => {

          
      const text  = String.fromCharCode(Math.random() * 250);
      const x = ind * 20;
      ctx.fillText(text,x,y);
  
      if(y > 100 + Math.random() * 10000) yPos[ind] = 0;
      else yPos[ind] = y + 20;
      })

   }
   setInterval(DesenhaMatrix, 50)
