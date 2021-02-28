const carritoAbrir = document.querySelector('.confirmar');

const carritoCerrar = document.querySelector('#carritoCerrar');

const contenedorModal = document.querySelector('.modal-contenedor')
const modalCarrito = document.querySelector('.modal-carrito')

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})


/*
let nombre = $(" #nombre").val();
let localidad = $("form #localidad").val();
let calle = $("form #calle").val();
let botonPedido = document.querySelector(".btn-pedido");

botonPedido.addEventListener('click', ()=>{
    if(!nombre)     console.log("por favor ingrese su nombre")
    if(!localidad)  console.log("por favor ingrese su localidad")
    if(!calle)  console.log("por favor ingrese la calle donde vive")

    
} )

*/

$(document).ready(function() {
    $("#frmDatos").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 3,
          number: false
        },
        localidad: {
          required: true,
          minlength: 3
        },
        calle: {
          required: true,
          minlength: 3
        }
        
      },
      messages : {
        nombre: {
          required: "Por favor, ingrese un nombre valido",
          minlength: "Por favor, ingrese mas de 3 caracteres",
          

        },
        localidad: {
          required: "Por favor ingrese una localidad valida",
          minlength: "Por favor, ingrese mas de 3 caracteres",

         
        },
        calle: {
          required: "Por favor, ingrese una calle valida",
          minlength: "Por favor, ingrese mas de 3 caracteres",

        }
        
      }
    });
  });
