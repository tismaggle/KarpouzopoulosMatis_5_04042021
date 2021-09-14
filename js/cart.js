
// //creation d'un objet cart vide dans le localstorage
// var cart = {};
// cart.products = [];
// localStorage.setItem('cart', JSON.stringify(cart));

// $('button').on('click', function(e) {
//     var li = $(this).parent();

//     var quantity = $(li).find('input[type=text]').val();

//     var product = {};
//     product.id = $(li).attr('data-id');
//     product.name = $(li).attr('data-name');
//     product.price = $(li).attr('data-price');
//     product.quantity = quantity;

//     addToCart(product);
// });

// function addToCart(product) {
//     // Retrieve the cart object from local storage
//     if (localStorage && localStorage.getItem('cart')) {
//         var cart = JSON.parse(localStorage.getItem('cart'));            

//         cart.products.push(product);

//         localStorage.setItem('cart', JSON.stringify(cart));
//     } 
// }






// function getArticles() {
//     // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
//     fetch('http://localhost:3000/api/teddies/${id}')
//       .then(function (response) {
//         return response.json();
//       })
//       .catch((error) => {
//         let container = document.querySelector(".container");
//         container.innerHTML =
//           "Nous n'avons pas réussi à afficher nos nounours. Avez-vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
//         container.style.textAlign = "center";
//         container.style.padding = "45vh 0";
//       })
//       .then(function (resultatAPI) {
//         // On place les données reçues via l'API aux bons endroits sur la page
//         article = resultatAPI;
//         productCardName.innerHTML = article.name;
//         productCardImg.src = article.imageUrl;
//         productCardDescription.innerText = article.description;
  
//         // Formatage du prix pour l'afficher en euros
//         article.price = article.price / 100;
//         productCardPrice.innerText = new Intl.NumberFormat("fr-FR", {
//           style: "currency",
//           currency: "EUR",
//         }).format(article.price);
  
//         let colorSelect = document.getElementById("color-select");
//         for (let i = 0; i < article.colors.length; i++) {
//           let option = document.createElement("option");
//           option.innerText = article.colors[i];
//           colorSelect.appendChild(option);
//         }
//       });
//   }