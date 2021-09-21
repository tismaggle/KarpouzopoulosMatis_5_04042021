// Récupération de l'id du produit
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const url = `http://127.0.0.1:3000/api/cameras/${params.id}/`;

// Récupération du contenu du produit depuis le serveur
fetch(url).then(response =>{
    if(response.ok){
        return response.json();
    }
}).then(camera =>{
// Création de la structure où ira le contenu du produit sélectionné
const positionElement = document.querySelector('.container-page-produit');
const structureProduit = `
<div class="mise-en-page-produit">
    <div class="produit_photo">
        <img src="${camera.imageUrl}" id="photo" style="width:500px;" alt="photo de l'appareil">
    </div>
    <ul>
        <li>Nom du produit : <span>${camera.name}</span></li>
        <li>Description : <span>${camera.description}</span></li>
        <li>Prix : <span>${camera.price / 100} €</span></li>
    </ul>
    <form>
        <label for="option_produit">Choisir l'option :</label>
        <select name="option_produit" id="option_produit">
            <option value="option_1">
                ${camera.lenses.map(lense=>`<option value=${lense}>
                    ${lense}
                </option>`)}
            </option>
        </select>
    </form>
    <button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier</button>
</div>
`

// Injection de la structure HTML dans la page produit
positionElement.innerHTML = structureProduit;
});
var productImg = document.getElementsByTagName('img');
if(productImg && productImg.style) {
    productImg.style.width = '500px';
}

// Sélection de l'id du formulaire
const idForm = document.getElementsByTagName('select');

// Mettre le choix de l'utilisateur dans une variable
var choixForm = idForm.values;
console.log(choixForm);


// Sélection du bouton Ajouter au panier
const btn_envoyerPanier = document.querySelector('#btn-envoyer');
btn_envoyerPanier.addEventListener('click', (event)=>{
    event.preventDefault()
})
