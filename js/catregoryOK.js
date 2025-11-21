
let querystring = location.search
let params = new URLSearchParams(querystring);
let categoria = params.get("categoria");


if (!categoria) {
    location.href = "index.html";
}


let listaProductos = document.querySelector(".ProductList");
let tituloSeccion = document.querySelector(".section-all h2");

if (!listaProductos) {
    console.error("No se encontró .ProductList en el DOM");
}


tituloSeccion.innerText = categoria;


let url = `https://dummyjson.com/products/category/${categoria}`;



fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let productos = data.products;
        let html = "";

       
        for (let i = 0; i < productos.length; i++) {
            let p = productos[i];

            html += `
            <article class="productosHome">
                <img src="${p.thumbnail}" class="imgHome" alt="${p.title}">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <p><strong>$${p.price}</strong></p>
                <a href="./product.html?id=${p.id}" class="verDetalles">
                Ver detalles
            </a>
            </article>
            `;
        }

       
        listaProductos.innerHTML = html;

    })
    
        console.log("Error:");
    ;
