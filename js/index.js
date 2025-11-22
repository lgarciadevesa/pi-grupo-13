
const productos = 'https://dummyjson.com/products';
const beauty = 'https://dummyjson.com/products/category/beauty?limit=10';
const fragrances = 'https://dummyjson.com/products/category/fragrances?limit=10';


const beautyContainer = document.querySelector('.BeautyList');
const allContainer = document.querySelector('.ProductList');


if (!beautyContainer || !allContainer) {
    console.error('No se encontraron los contenedores .BeautyList o .ProductList en el DOM');
} else {

    
    fetch(productos)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            const products = data.products || [];

            
            fetch(beauty)
                .then(function(res) {
                    return res.json();
                })
                .then(function(dataBeauty) {

                    const beautyProducts = dataBeauty.products || [];

                  
                    fetch(fragrances)
                        .then(function(res) {
                            return res.json();
                        })
                        .then(function(dataFragrances) {

                            const fragranceProducts = dataFragrances.products || [];

                            
                            const combinedList = beautyProducts.concat(fragranceProducts);

                            
                            renderList(beautyContainer, combinedList);
                            renderList(allContainer, products);         

                        })
                        .catch(function(error) {
                            console.log('Error al traer frangrances: ' + error);
                        });

                })
                .catch(function(error) {
                    console.log('Error al traer beauty: ' + error);
                });

        })
        .catch(function(error) {
            console.log("Error al traer productos: " + error);
        });
}


function renderList(container, list) {

    if (!list || list.length === 0) {
        container.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    let html = '';

    for (let i = 0; i < list.length; i++) {
        const p = list[i];
        const img = p.thumbnail || '';

        html += `
        <article class="product-card">
            <img src="${img}" alt="${p.title}">
            <p class="title">${p.title}</p>
            <p class="price">Precio: $${p.price}</p>
            <p class="description">${p.description}</p>

            <a href="./product.html?id=${p.id}" class="verDetalles">
                Ver detalles
            </a>
        </article>
        `;
    }

    container.innerHTML = html;
}
