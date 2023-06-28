const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const productoBuscado = productos.find( producto => producto.id == id)

const contenedor = document.querySelector(".container_info")

contenedor.innerHTML = `<div class="column">
<h2>${productoBuscado.name}</h2>
<img src="${productoBuscado.image}" alt="Imagen del producto">
</div>
<div class="column">
<h2>Información</h2>
<p>${productoBuscado.informacion}</p>
</div>`