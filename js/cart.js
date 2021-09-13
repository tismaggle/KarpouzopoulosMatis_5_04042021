
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