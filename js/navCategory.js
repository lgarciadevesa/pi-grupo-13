window.addEventListener("load", function () {
  const navList = document.querySelector(".navUl");
  if (!navList) return;

  const URL_CATEGORIAS = "https://dummyjson.com/products/categories";

  fetch(URL_CATEGORIAS)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Categorías desde la API:", data);
      let itemsHTML = "";

      for (let i = 0; i < 4; i++) {
        const cat = data[i];       
        const slug = cat.slug;     
        const nombre = cat.name;   

        itemsHTML += `
          <li class="navLi">
            <a href="./category.html?categoria=${slug}">
              ${nombre}
            </a>
          </li>
        `;
      }

      navList.innerHTML = itemsHTML;
    })
   
      
     
    });

