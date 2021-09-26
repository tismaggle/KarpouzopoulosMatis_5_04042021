// Déclaration de variables
let _id = [];
let i = [];
let cameras = [];

// Récupération des articles depuis l'API
fetch("http://127.0.0.1:3000/api/cameras").then(response => {
    if(response.ok){
        return response.json()
    } else {
        alert.log("error")
    }
})

// Dispatch des données de chaque produit (prix, nom...) dans le DOM
.then(cameras => {
    let main = document.querySelector('main');

    cameras.forEach((cameras, i) => {
        // container principal
        let allProductsDisplay = document.createElement("div");
        document.querySelector(".allproductsdisplay");
        document.body.style.background = 'grey';
        main.appendChild(allProductsDisplay);
        allProductsDisplay.classList.add("allproductsdisplay");
        allProductsDisplay.style.textAlign = "center";

        // lien vers le produit
        let link = document.createElement("a");
        allProductsDisplay.appendChild(link);
        link.href = `./html/product.html?id=${cameras._id}`

        // container du produit
        let productCard = document.createElement("div");
        document.querySelector(".products");
        link.appendChild(productCard);
        productCard.classList.add("product");

        // image du produit
        let img = document.createElement('img');
        img.classList.add('image_camera');
        img.src = cameras.imageUrl;
        img.style.width = '380px';
        productCard.appendChild(img);

        // nom du produit
        let h2 = document.createElement('h2');
        h2.innerHTML = cameras.name;
        productCard.appendChild(h2);
    })   
})
