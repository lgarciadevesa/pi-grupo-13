
document.addEventListener("DOMContentLoaded", function () {

  let queryString = location.search;
  let qs = new URLSearchParams(queryString);
  let id = qs.get("id");

  if (!id) {
    console.log("No se recibió un id de producto en la URL");
    return;
  }

  let img         = document.querySelector(".productImg");
  let name        = document.querySelector(".productName");
  let brand       = document.querySelector(".productBrand");
  let description = document.querySelector(".productDescription");
  let price       = document.querySelector(".productPrice");
  let category    = document.querySelector(".categoryLink");
  let stock       = document.querySelector(".productStock");
  let tags        = document.querySelector(".tagsList");
  let reviews     = document.querySelector(".reviewsList");

  fetch("https://dummyjson.com/products/" + id)
    .then(function(response) {
      return response.json();
    })
    .then(function(product) {
      console.log(product);

      img.src = product.thumbnail;
      img.alt = product.title;

      name.innerText = product.title;

      brand.innerText = product.brand;

      description.innerText = product.description;

      price.innerText = "$" + product.price;

      category.innerText = product.category;
      category.href = "./category.html?category=" + product.category;

      category.style.color = "black";
      category.style.fontSize= "15px"

      stock.innerText = "Stock disponible: " + product.stock + " unidades";

      let tagsHTML = "";
      for (var i = 0; i < product.tags.length && i < 3; i++) {
        tagsHTML += "<li>" + product.tags[i] + "</li>";
      }
      tags.innerHTML = tagsHTML;

      if (product.reviews && product.reviews.length > 0) {
        let reviewsHTML = "";

        for (let j = 0; j < product.reviews.length; j++) {
          let r = product.reviews[j];

          reviewsHTML +=
            "<article class='reviewItem'>" +
              "<p><strong>Rating:</strong> " + r.rating + "☆" + "</p>" +
              "<p>" + r.comment + "</p>" +
              "<p><small>" + r.date + " - " + r.reviewerName + "</small></p>" +
            "</article>";
        }

        reviews.innerHTML = reviewsHTML;

      } else {
        reviews.innerHTML = "<p>No hay reviews para este producto.</p>";
      }

    })
    .catch(function(error) {
      console.log("Error al obtener el producto:", error);
    });

});