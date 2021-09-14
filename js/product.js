// Sélection de l'emplacement cible

// Récupérer les articles depuis l'API
fetch("http://127.0.0.1:3000/api/cameras/")
    .then(response => {
        if(response.ok){
            console.log(response)
            return response.json()
        } else {
            alert("error")
        }
    })

    var element = document.getElementsByClassName('stretched-link');
    element.onclick = function () {
        // Placement des données reçues via l'API aux bons endroits sur la page
        // let chosenCamera = ;
        let productCardName = document.createElement("p");
        productCardName.innerHTML = chosenCamera.name;
        main.appendChild(productCardName);
        productCardName.classList.add("product_name");  
        let productCardImg = document.createElement("img");
        productCardImg.src = chosenCamera.imageUrl;
        main.appendChild(productCardImg);
        productCardImg.classList.add("product_img");  
        let productCardDescription = document.createElement("p");
        productCardDescription.innerText = chosenCamera.description;
        console.log('ok')
        main.appendChild(productCardDescription);
        productCardDescription.classList.add("product_description");  
  
        // prix du produit
        let price = document.createElement("p");
        price.innerHTML = (chosenCamera.price / 100) + '€';
        price.classList.add("product_price");  
        main.appendChild(price); 
  
        let colorSelect = document.getElementById("color-select");
        for (let i = 0; i < article.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.colors[i];
        colorSelect.appendChild(option);
        console.log('ok')
        }
    }