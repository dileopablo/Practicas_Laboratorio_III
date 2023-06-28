console.log(productos);

const contenedor_cards = document.getElementById("contenedor_cards");

// Obtener todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Obtener el input de busqueda
const inputBusqueda = document.getElementById('buscar');

let templateCard = "";

function crearTarjetas() {
    templateCard = ""
    productos.forEach((productos) => {
        templateCard += `<div class="card">
        <img src="${productos.image}" alt="${productos.type} ${productos.id}">
        <p>${productos.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${productos.id}">Mas info</a>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;
}

// crearTarjetas()

let productosFiltrados = []

let checkboxesSeleccionados = [];

if (checkboxesSeleccionados.length === 0) {
    templateCard = ""
    crearTarjetas()
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Agregar el valor del checkbox al array checkboxesSeleccionados si está seleccionado
            checkboxesSeleccionados.push(checkbox.value);
            crearTarjetasCheck()
        } else {
            // Eliminar el valor del checkbox del array checkboxesSeleccionados si está deseleccionado
            const index = checkboxesSeleccionados.indexOf(checkbox.value);
            checkboxesSeleccionados.splice(index, 1);

            crearTarjetasCheck()

            // Si el array está vacio cargo todas las cards
            if (checkboxesSeleccionados.length === 0) {
                templateCard = ""
                crearTarjetas()
            }

        }
        // Mostrar los elementos seleccionados en la consola
        console.log('Checkboxes seleccionados:', checkboxesSeleccionados);
    });
});


function crearTarjetasCheck() {

    productosFiltrados = productos.filter(productos => checkboxesSeleccionados.includes(productos.type));
    console.log(productosFiltrados);

    templateCard = ""
    productosFiltrados.forEach((productos) => {
        templateCard += `<div class="card">
        <img src="${productos.image}" alt="${productos.type} ${productos.id}">
        <p>${productos.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${productos.id}">Mas info</a>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;

}

let productosFiltradosInput = []

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;
    // Realizar acciones con el valor del input, como búsqueda o filtrado

    crearTarjetasInput()

    if (productosFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>"
    }

    console.log(productosFiltradosInput);
    let labelBuscar = document.getElementById("labelBuscar")
    labelBuscar.innerHTML = inputValue
    console.log(inputValue);
  });

  function crearTarjetasInput() {

    const textoBusqueda = inputBusqueda.value.toLowerCase();
    //otra alternativa es usando startsWith
    productosFiltradosInput = productos.filter(productos => productos.name.toLowerCase().includes(textoBusqueda));

    templateCard = ""
    productosFiltradosInput.forEach((productos) => {
        templateCard += `<div class="card">
        <img src="${productos.image}" alt="${productos.type} ${productos.id}">
        <p>${productos.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${productos.id}">Mas info</a>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;

}