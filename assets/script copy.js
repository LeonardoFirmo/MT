
 const titulo = document.querySelector('#texto1');
 const titulo2 = document.querySelector('#texto2');
 const titulo3 = document.querySelector('#texto3');
 const pills = document.querySelector('#pills');
 const bluePill = document.getElementById('blue-pill');
 const redPill = document.getElementById('red-pill');
 const rabbit = document.querySelector('#rabbit');

 titulo2.style.display = 'none';
 titulo3.style.display = 'none';
 





// Escreve o texto

  function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''

    textoArray.forEach((letra, i) => {
      
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 100 * i)
        
    })


  }




//  texto1-entra
typeWrite(titulo) 


//  texto2-entra
setTimeout( () => {
  titulo.style.display = 'none';
  titulo2.style.display = 'flex';
  typeWrite(titulo2)
},  3000);

//  texto3-entra
setTimeout( () => {
  titulo2.style.display = 'none';
  titulo3.style.display = 'flex';
  typeWrite(titulo3)
},  7000);

//  pills-entra
setTimeout( () => {
  titulo3.style.display = 'none';
  rabbit.style.display = 'flex'
  
},  10000);

setTimeout( () => {
  rabbit.style.display = 'none'
  
},  16000);



//  pills-entra
setTimeout( () => {

  pills.style.display = 'flex'
  
},  17000);

 
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
