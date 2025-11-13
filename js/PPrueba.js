const productos = 'https://dummyjson.com/products';

const beautyContainer = document.querySelector('.BeautyList');
const allContainer = document.querySelector('.ProductList');

if (!beautyContainer || !allContainer) {
    console.error('No se encontraron los contenedores .BeautyList o .ProductList en el DOM');
} else {

    fetch(productos)
        .then(function (res) {

            return res.json();
        })
        .then(function (data) {


            const products = data.products || [];


            const beautyProducts = [];
            for (let i = 0; i < products.length; i++) {
                const p = products[i];

                if (p.category) {
                    let cat = p.category.toLowerCase();
                    if (cat === 'beauty' || cat === 'fragrances') {
                        beautyProducts.push(p);
                    }
                }

            }

            function renderList(container, list) {
                if (!list || list.length === 0) {
                    container.innerHTML = '<p>No se encontraron productos.</p>';
                    return;
                }

                let html = '';

                for (let i = 0; i < list.length; i++) {
                    const p = list[i];
                    const img = p.thumbnail ;

                    html += `
           <article class="product-card">
    <img src="${img}" alt="${p.title}">
    <p class="title">${p.title}</p>
    <p class="price">Price: $${p.price}</p>
      <p class="description">${p.description}</p>

    <a href="./product.html" class="verDetalles">
      Ver detalles
    </a>
  </article>
          `;
                }

                container.innerHTML = html;
            }

            renderList(beautyContainer, beautyProducts);
            renderList(allContainer, products);
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });

    console.log(productos);
}
