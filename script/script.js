// Clase constructora
class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.descripcion = producto.descripcion;
        this.precio = producto.precio;
        this.cantidad = 1;
        this.precioTotal = producto.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
};

// Inicializamos el carrito
let carrito = [];
// Productos
const productos=[
    {
        id: 0,
        descripcion: "Bicicleta de ruta para hombres, azul oscuro y naranja",
        precio: 1200,
        img: "./assets/bici1.jpg",
    },
    {
        id: 1,
        descripcion: "Bicicleta de paseo basica para damas, roja ",
        precio: 1250,
        img: "./assets/bici2.jpg",
    },
    {
        id: 2,
        descripcion: "Bicicleta de montaña para hombres, negra y azul",
        precio: 1300,
        img: "./assets/bici3.jpg",
    },
    {
        id: 3,
        descripcion: "Bicicleta de montaña para damas, violeta",
        precio: 1200,
        img: "./assets/bici4.jpg",
    },
    {
        id: 4,
        descripcion: "Bicicleta fixie, ideal para la ciudad, negra",
        precio: 1200,
        img: "./assets/bici5.jpg",
    },
    {
        id: 5,
        descripcion: "Bicicleta de paseo para damas, blanca y verde",
        precio: 1200,
        img: "./assets/bici6.jpg",
    },
];

//  ************* DECLARACION DE FUNCIONES *********//
//  recibimos el array como parametro
function mostrarProductos(array){
    let contenedor=document.getElementById("contenedor");
    
    for(const producto of array){
        let card=document.createElement("div");
        
        card.innerHTML=`
            <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img img-fluid card-img-top" width="100%"  src="${producto.img}" alt="bicicleta 1">
                <div class="m-3">
                    <p class="card-subtitle">${producto.precio}</p>
                    <p class="card-text ">${producto.descripcion}</p>
                </div>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${producto.id}" type="button" class="btn m-4 btn-dark"> Agregar </button>
                </div>
            </div>
            </div>
            `;
            
            contenedor.appendChild(card);
            
            let boton = document.getElementById(`agregar${producto.id}`);
            
            boton.onclick = () => {agregarACarrito(producto.id); 
                Swal.fire({ 
                    title: 'Producto agregado al carrito',
                    text: '¿Desea continuar comprando?',
                    icon: 'success',
            });
            }
    }
};

function tablaCarrito(carrito) {
    let contenedor1= document.getElementById("carrito");
    contenedor1.innerHTML = "";

    let precioTotal;
    precioTotal = obtenerPrecioTotal(carrito);

    let tabla = document.createElement("div");
    tabla.innerHTML = `
        <table id="tablaCarrito" class="table table-striped m-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Parcial</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody id="bodyTabla">
                <tr>
                    <th scope="row">Total: $${precioTotal}</th>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </tbody>
        </table>
    `;

    contenedor1.appendChild(tabla);
    let bodyTabla = document.getElementById("bodyTabla");
    for (let producto of carrito) {
        let datos = document.createElement("tr");
        datos.innerHTML =`
            <th scope="row">1</th>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precioTotal}</td>
            <td><button id="eliminar${producto.id}" type="button" class="btn btn-light">Eliminar</button></td>
        `;

        bodyTabla.appendChild(datos);

        let eliminar=document.getElementById(`eliminar${producto.id}`)

        eliminar.onclick = () => {
        Swal.fire({
            title: '¿Quiere eliminar el producto del carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Si',
            denyButtonText: `No`, 
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                eliminarDeCarrito(producto.id);
            }});
        };
    };
}
function agregarACarrito(idProducto) {
    let productoCarrito = carrito.find((elemento) => {
        if (elemento.id == idProducto) {
            return true;
        }
    });
    if (productoCarrito) {
        let index = carrito.findIndex((elemento) => {
            if (elemento.id === productoCarrito.id) {
                return true;
            }
        });

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        carrito.push(new Producto(productos[idProducto]));
    }

    localStorage.setItem("productosStorage", JSON.stringify(carrito));
    
    tablaCarrito(carrito);
};

function eliminarDeCarrito(id) {
    let producto = carrito.find((producto) => producto.id === id);
    let index = carrito.findIndex((element) => {
        if (element.id === producto.id) {
            return true;
        }
    });
    if (producto.cantidad > 1) {
        console.log(`cantidad disponible: ${producto.cantidad}`);

        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        carrito.splice(index, 1);

        if (carrito.lenght === 0) {
            carrito = [];
        }
    }
    localStorage.setItem("productosStorage", JSON.stringify(carrito));
    tablaCarrito(carrito);
}

function carritoStorage() {
    let productosStorage= JSON.parse(localStorage.getItem("productosStorage"));
    console.log("contenido en chequear Carrito en ls ", productosStorage);

    if (productosStorage) {
        let array = [];
        for (let i = 0; i < productosStorage.length; i++) {
            let producto = new Producto(productosStorage[i]);
            producto.actualizarPrecioTotal();
            array.push(producto);
        }

        return array;
    }

    return [];
}

function obtenerPrecioTotal(array) {
    let precioTotal = 0;
    for (const producto of array) {
        precioTotal += producto.precioTotal;
    }
    return precioTotal;
}

carrito=carritoStorage();
tablaCarrito(carrito);
mostrarProductos(productos); 