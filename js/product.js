// Récupération de l'id du produit
const urlSearchParams = new URLSearchParams(window.location.search);
console.log(urlSearchParams);
const params = Object.fromEntries(urlSearchParams.entries());
console.log('params =', params);
const url = `http://127.0.0.1:3000/api/cameras/${params._id}/`;
// const url = `http://127.0.0.1:3000/api/cameras/5be1ed3f1c9d44000030b061`;
console.log('url =', url);


//--------------------------marche pas--------------------------
// affichage du produit sélectionné
    // exemple d'utilisation de la methode .find() trouvé dans mdn
    // const inventaire = [
    //     {nom: 'pommes', quantité: 2},
    //     {nom: 'bananes', quantité: 0},
    //     {nom: 'cerises', quantité: 5}
    //   ];
    // const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
    // console.log(resultat); 

// const inventaire = fetch(`http://127.0.0.1:3000/api/cameras/`) 
// const SelectedIdProduct = URLSearchParamsPrototype.find((element) => element._id === params);
// console.log(SelectedIdProduct);
//--------------------------marche pas--------------------------


// Ciblage de la balise où ira le contenu du produit sélectionné
const positionElement = document.querySelector('.container-page-produit');

//Création de la structure où ira le contenu du produit sélectionné
const structureProduit = `
<div class="mise-en-page-produit">
    <div class="produit_photo">
        <img src="${params.imageUrl}" alt="photo de l'appareil">
    </div>
    <ul>
        <li>Nom du produit : <span>${params.name}</span></li>
        <li>description : <span>${params.description}</span></li>
        <li>Lentille : <span>${params.lens}</span></li>
        <li>Prix : <span>${params.price / 100}€</span></li>
    </ul>
    <form>
        <label for="option_produit"></label>
        <select name="option_produit" id="option_produit">
            <option value="option_1">Modèle de lentille</option>
        </select>
    </form>
    <button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier</button>
</div>
`

// Injection de la structure HTML dans la page produit
positionElement.innerHTML = structureProduit;