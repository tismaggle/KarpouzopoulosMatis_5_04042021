let url = "http://127.0.0.1:3000/api/cameras"

fetch(url).then(response => {
    if(response.ok){
        console.log(response)
        return response.json()
    }
}).then(cameras => {
    console.log(cameras);    
})

// Récupérer les articles depuis l'API
//   fetch("http://localhost:3000/api/cameras")
//     .then(response => {
//         if(response.ok){
//             return response.json()
//         }
//     })
//     .then(data => {
//         console.log(data)
//     })
//     let main = document.querySelector('main')

//     data.forEach(lenses => {
//         let img = document.createElement('img')
//         img.classList.add('image_camera')
//         img.src = camera.imageUrl
//         main.appenChild('img')

//         let h2 = document.createElement('h2')
//         h2.innerHTML = camera.name
//         main.appenChild('h2')
//         img.classList.add('image_camera')
//     })





// .catch((error) => {
//   let productsContainer = document.querySelector(".products-container");
//   productsContainer.innerHTML =
//     ":(";
//   productsContainer.style.textAlign = "center";
//   productsContainer.style.padding = "30vh 0";
// })

// // Dispatcher les données de chaque produit (prix, nom...) dans le DOM
// .then(function (resultatAPI) {
//   const articles = resultatAPI;
//   console.log(articles);
//   for (let article in articles) {
//     let productCard = document.createElement("div");
//     document.querySelector(".products").appendChild(productCard);
//     productCard.classList.add("product");

//     let productLink = document.createElement("a");
//     productCard.appendChild(productLink);
//     productLink.href = `product.html?id=${resultatAPI[article]._id}`;
//     productLink.classList.add("stretched-link");

//     let productImgDiv = document.createElement("div");
//     productLink.appendChild(productImgDiv);
//     productImgDiv.classList.add("product__img");

//     let productImg = document.createElement("img");
//     productImgDiv.appendChild(productImg);
//     productImg.src = resultatAPI[article].imageUrl;

//     let productInfosDiv = document.createElement("div");
//     productLink.appendChild(productInfosDiv);
//     productInfosDiv.classList.add("product__infos");

//     let productInfoTitle = document.createElement("div");
//     productInfosDiv.appendChild(productInfoTitle);
//     productInfoTitle.classList.add("product__infos__title");
//     productInfoTitle.innerHTML = resultatAPI[article].name;

//     let productInfoPrice = document.createElement("div");
//     productInfosDiv.appendChild(productInfoPrice);
//     productInfoPrice.classList.add("product__infos__price");

//     // Formatage du prix pour l'afficher en euros
//     resultatAPI[article].price = resultatAPI[article].price / 100;
//     productInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
//       style: "currency",
//       currency: "EUR",
//     }).format(resultatAPI[article].price);
//   }
// });


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