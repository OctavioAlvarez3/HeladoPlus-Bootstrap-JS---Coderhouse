
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('.lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];



cargarEventListeners();

//Funcion que carga los eventos
function cargarEventListeners(){

    //cuando agrego un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', cargarCarrito)

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //Muestra los cursos de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []

        carritoHTML()
    })

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
       articulosCarrito = [] //reinicio el carrito
       carritoHTML() //vuelvo a crear el html
    })
}

//Agrega los elementos al carrito
function cargarCarrito(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){ 

         //Me permite tomar todo el html de la card
        const curso = e.target.parentElement.parentElement;
        
        leerDatosCurso(curso)
        
    }
}

//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //elimina del arreglo articulosCarrito por data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML() //vuelvo a escribir el html
    }
}


//Lee el contenido del HTML al que le doy click y extrae la info del curso
function leerDatosCurso(curso){

    //creo un objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precios span:nth-of-type(2n)').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), 
        cantidad: 1

    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        //actualizo la cantidad
        const curso = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso //retorna el objeto actualizado
            }else{
                return curso; //retorna los objetos no duplicados
            }
        })

        articulosCarrito = [...curso]
    }else{
        //agrego el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    console.log(articulosCarrito)

    carritoHTML()
}


//Muestra el carrito en el HTML
function carritoHTML(){

    //limpio el HTML
    limpiarHTML();

    //recorro el carrito y genero el html
    articulosCarrito.forEach( (curso) => {
        const fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
                <a href="#" class="" > <i class=" borrar-curso fas fa-trash" data-id="${curso.id}"></i> </a> 
            <td>
        `

        //Agrego el html del carrito en el tbody
        contenedorCarrito.appendChild(fila)
    })

    //Agrego el carrito al Storage
    sincronizarStorage()

}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

//Elimina los cursos del tbody
function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
}







/*let carrito = [];
let cantidadDeProductos = 0;
let producto;


function Carrito(){
    
   
    this.contarProductos = function(){
        producto = prompt("ingrese el producto que desea: cucharita, cono, taza, confites");
        producto.toLowerCase()

        if(producto != "cucharita" && producto != "cono" && producto != "taza" && producto != "confites"){
            alert("Por favor ingrese un producto válido")
        }else{
            if(producto === "cucharita"){
                carrito.push({nombre: "cucharita", precio: 200})
                alert("Producto agregado al carrito!")
                cantidadDeProductos++;
            }
            if(producto === "cono"){
                carrito.push({nombre: "cono", precio: 100})
                alert("Producto agregado al carrito!")
                cantidadDeProductos++;
            }
            if(producto === "taza"){
                carrito.push({nombre: "taza", precio: 300})
                alert("Producto agregado al carrito!")
                cantidadDeProductos++;
            }
            if(producto === "confites"){
                carrito.push({nombre: "confites", precio: 150})
                alert("Producto agregado al carrito!")
                cantidadDeProductos++;
            }
            
        }
        descuentoEnEfectivo()
        agregarMasProductos()

    }
   
    
}


function agregarMasProductos(){

    for(let i=0; i<10; i++){

        producto = prompt("Desea agregar otro producto?  Si / No")
        producto.toLowerCase()
    
        if(producto === "si"){
            producto = prompt("ingrese el producto que desea: cucharita, cono, taza, confites");
                if(producto != "cucharita" && producto != "cono" && producto != "taza" && producto != "confites"){
                    alert("Por favor ingrese un producto válido")
                }else{
                    if(producto === "cucharita"){
                        carrito.push({nombre: "cucharita", precio: 200})
                        alert("Producto agregado al carrito!")
                        cantidadDeProductos++;
                    }
                    if(producto === "cono"){
                        carrito.push({nombre: "cono", precio: 100})
                        alert("Producto agregado al carrito!")
                        cantidadDeProductos++;
                    }
                    if(producto === "taza"){
                        carrito.push({nombre: "taza", precio: 300})
                        alert("Producto agregado al carrito!")
                        cantidadDeProductos++;
                    }
                    if(producto === "confites"){
                        carrito.push({nombre: "confites", precio: 150})
                        alert("Producto agregado al carrito!")
                        cantidadDeProductos++;
                    }
                }
        }else{
            alert("Gracias por comprar en helado plus")
            break;
        }
    }

   
}


function descuentoEnEfectivo(){

    let descuentoEfectivo = prompt("Desea abonar en efectivo? Si - No")
    descuentoEfectivo.toLowerCase();
    if(descuentoEfectivo === "si") alert("Felicidades! tenés un 10% de descuento por pago en efectivo")
}



let persona = new Carrito();
persona.contarProductos();
console.log(carrito)
console.log(`Agregaste ${cantidadDeProductos} al carrito`)

*/