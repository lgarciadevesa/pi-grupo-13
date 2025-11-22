
console.log("searchResult.js cargado");

window.addEventListener("load", function () {
  const h1search = document.querySelector(".h1search");
  const contenedor = document.querySelector(".resultList");


  const categorias = ["beauty", "fragrances", "furniture", "groceries"];


  const params = new URLSearchParams(location.search);
  let termino = params.get("busqueda");

  termino = termino.toLowerCase();

  if (!termino) {
    h1search.innerHTML = "No se ingresó ningún término de búsqueda.";
    return;
  }

 
  if (categorias.includes(termino)) {
    location.href = `category.html?categoria=${termino}`;
    return; 
  }

 
  h1search.innerHTML = `Resultados de búsqueda para "${termino}"`;

  const URL = `https://dummyjson.com/products/search?q=${termino}`;

  fetch(URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let resultados = data.products 

    
      resultados = resultados.filter(function (p) {
        return p.title.toLowerCase().includes(termino);
      });

      if (resultados.length === 0) {
        contenedor.innerHTML = `
          <p>No se encontraron productos para "${termino}".</p>
        `;
        return;
      }

      let html = "";

      for (let i = 0; i < resultados.length; i++) {
        const p = resultados[i];

        html += `
          <article>
            <img src="${p.thumbnail}" alt="${p.title}">
            <p>${p.title}</p>
            <p>Categoría: ${p.category}</p>
            <p>Precio: $${p.price}</p>
             <a href="./product.html?id=${p.id}" class="verDetalles">
                Ver detalles
            </a>
          </article>
        `;
      }

      contenedor.innerHTML = html;
    })
    
     
    });
