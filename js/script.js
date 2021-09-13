// Récupérer les articles depuis l'API
fetch("http://127.0.0.1:3000/api/cameras").then(response => {
    if(response.ok){
        console.log(response)
        return response.json()
    } else {
        alert.log("error")
    }
})

// Dispatcher les données de chaque produit (prix, nom...) dans le DOM
.then(cameras => {
    let main = document.querySelector('main');

    cameras.forEach(cameras => {
        // container principal
        let allProductsDisplay = document.createElement("div");
        document.querySelector(".allproductsdisplay");
        document.body.style.background = 'grey';
        main.appendChild(allProductsDisplay);
        allProductsDisplay.classList.add("allproductsdisplay");

        // lien vers le produit
        let link = document.createElement("a");
        allProductsDisplay.appendChild(link);
        // document.getElementsByClassName('stretched-link').href = 'html/product.html';
        link.href = 'html/product.html';
        link.classList.add("stretched-link");

        // container du produit
        let productCard = document.createElement("div");
        document.querySelector(".products");
        link.appendChild(productCard);
        productCard.classList.add("product");

        // image du produit
        let img = document.createElement('img');
        img.classList.add('image_camera');
        img.src = cameras.imageUrl;
        img.style.width = '250px';
        productCard.appendChild(img);

        // nom du produit
        let h2 = document.createElement('h2');
        h2.innerHTML = cameras.name;
        productCard.appendChild(h2);
    })   
})

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