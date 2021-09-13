// Récupérer les articles depuis l'API
fetch("http://127.0.0.1:3000/api/cameras").then(response => {
    if(response.ok){
        console.log(response)
        return response.json()
    } else {
        alert.log("error")
    }
})

// Dispatcher les données du produit sélectionné (prix, nom...) dans le DOM
.then(cameras => {
    let main = document.querySelector('main');

    // cameras.forEach(cameras => {
        // container du produit
        let productCard = document.createElement("div");
        document.querySelector(".products");
        main.appendChild(productCard);
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

        // description du produit
        let productInfosDiv = document.createElement("div");
        productCard.appendChild(productInfosDiv);
        productCard.innerHTML = cameras.description;
        productInfosDiv.classList.add("product__infos");

        // prix du produit
        let price = document.createElement("p");
        main.appendChild(price);
        price.innerHTML = (cameras.price / 100) + '€';
        price.classList.add("product_price");
    // })   
})
