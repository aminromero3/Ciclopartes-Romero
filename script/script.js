// **** ARRAYS **** //
// Productos destacados
const productosDestacados=[
    {
        id: 0,
        descripcion: "Bicicleta de ruta para hombres, azul oscuro y naranja",
        precio: 1200,
        img: "../assets/bici1.jpg",
    },
    {
        id: 1,
        descripcion: "Bicicleta de paseo basica para damas, roja ",
        precio: 1250,
        img: "../assets/bici2.jpg",
    },
    {
        id: 2,
        descripcion: "Bicicleta de montaña para hombres, negra y azul",
        precio: 1300,
        img: "../assets/bici3.jpg",
    },
    {
        id: 3,
        descripcion: "Bicicleta de montaña para damas, violeta",
        precio: 1200,
        img: "../assets/bici4.jpg",
    },
    {
        id: 4,
        descripcion: "Bicicleta fixie, ideal para la ciudad, negra",
        precio: 1200,
        img: "../assets/bici5.jpg",
    },
    {
        id: 5,
        descripcion: "Bicicleta de paseo para damas, blanca y verde",
        precio: 1200,
        img: "../assets/bici6.jpg",
    },
];

// Productos
// const productos=[
//     {
//         id: 0,
//         descripcion: "Bicicleta de ruta para hombres, azul oscuro y naranja",
//         precio: 1200,
//         img: "../assets/bici1.jpg",
//     },
//     {
//         id: 1,
//         descripcion: "Bicicleta de paseo basica para damas, roja ",
//         precio: 1250,
//         img: "../assets/bici2.jpg",
//     },
//     {
//         id: 2,
//         descripcion: "Bicicleta de montaña para hombres, negra y azul",
//         precio: 1300,
//         img: "../assets/bici3.jpg",
//     },
//     {
//         id: 3,
//         descripcion: "Bicicleta de montaña para damas, violeta",
//         precio: 1200,
//         img: "../assets/bici4.jpg",
//     },
//     {
//         id: 4,
//         descripcion: "Bicicleta fixie, ideal para la ciudad, negra",
//         precio: 1200,
//         img: "../assets/bici5.jpg",
//     },
//     {
//         id: 5,
//         descripcion: "Bicicleta de paseo para damas, blanca y verde",
//         precio: 1200,
//         img: "../assets/bici6.jpg",
//     },
//     {
//         id: 6,
//         descripcion: "Bicicleta plegable, ideal para la ciudad, blanca y negra",
//         precio: 1200,
//         img: "../assets/bici4.jpg",
//     },
//     {
//         id: 7,
//         descripcion: "Bicicleta de ruta para damas, celeste",
//         precio: 1200,
//         img: "../assets/bici5.jpg",
//     },
//     {
//         id: 8,
//         descripcion: "Bicicleta fixie, ideal para la ciudad, roja",
//         precio: 1200,
//         img: "../assets/bici6.jpg",
//     },
//     {
//         id: 9,
//         descripcion: "Bicicleta de cicloturismo, verde clarito",
//         precio: 1200,
//         img: "../assets/bici4.jpg",
//     },
//     {
//         id: 10,
//         descripcion: "Bicicleta plegable, ideal para la ciudad, azul",
//         precio: 1200,
//         img: "../assets/bici5.jpg",
//     },
//     {
//         id: 11,
//         descripcion: "Bicicleta de paseo ergonomica para hombre, negra",
//         precio: 1200,
//         img: "../assets/bici6.jpg",
//     },
// ];

//  ************* DECLARACION DE FUNCIONES *********//
//  recibimos el array como parametro
function mostrarProductos(array){
    // obtenemos el div 
    let contenedor=document.querySelector("contenedor");

    // recorremos el array e imprimimos
    for(const producto of array){
        // Creamos el contendor individual para cada card
        let card=document.createElement("div");
        
        // Agregamos el contenido a la card
        // Esto es con clases de bootstrap
        // Si necesitan una versión más sencilla haganmelo saber :)
        card.innerHTML=`
            <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img img-fluid card-img-top" width="100%"  src="${producto.img}" alt="bicicleta 1">
                <div class="card-body">
                    <p class="card-text">${producto.descripcion}</p>
            
                </div>
            </div>
            </div>
            `;
            // Una vez que tenemos creada la card, la agregamos al contenedor
            // que obtuvimos desde el HTML
            contenedor.appendChild(card);
        
    }
};



mostrarProductos(productosDestacados);