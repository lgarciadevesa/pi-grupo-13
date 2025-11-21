console.log("search.js cargado");


const categorias = ["beauty", "fragrances", "furniture", "groceries"];

const form = document.querySelector(".search form");
const input = document.querySelector(".busquedaForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();  

    let valor = input.value.trim().toLowerCase();  

    
    if (categorias.includes(valor)) {
        
        location.href = `category.html?categoria=${valor}`;
    } else {
        
        location.href = `search-result.html?search=${valor}`;
    }
});
