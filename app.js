// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos=[];


function ingresarAmigo(){
    let ingresoAmigo = (document.getElementById('amigo').value);
    console.log(ingresoAmigo);

    if(ingresoAmigo==''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(ingresoAmigo);
        console.log(amigos);

        actualizarListaAmigos();

        document.getElementById('amigo').value= '';
    }
}

function actualizarListaAmigos(){
    let listaAmigos =document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

   for (let i=0 ; i<amigos.length; i++){
    let li =document.createElement('li');
    li.textContent=amigos[i];
    listaAmigos.appendChild(li);
   }
}

function asignarTextoDOM(elemento,texto){
    let elementoDOM=document.querySelector(elemento);
    elementoDOM.innerHTML=texto;
    }

function sortearAmigo(){
     if(amigos.length==0)
    {
        alert('no se puede sortear con el campo vacio ');
     } else{

        let longitudAmigos= Math.floor(Math.random()*amigos.length);

        let amigoSecreto=amigos[longitudAmigos];

        console.log(amigoSecreto);

        // alert (`tu amigo es ${amigoSecreto}`);
        
        asignarTextoDOM('p',`tu amigo secreto es ${amigoSecreto}`)

    }

   
   
    
}

// function limpiar(){
//     document.getElementById('amigo').value='';
//     document.innerHTML('listaAmigos').value='';
//     document.innerHTML('resultado').value='';
// }


