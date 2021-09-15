// Récupération de l'id du produit
const chaineDeRequeteUrl_id = window.location.search;

// Extraire le texte de la chaine de requète pour ne récupérer que l'id
const leId = chaineDeRequeteUrl_id.slice(4);

// affichage du produit sélectionné
    // exemple d'utilisation de la methode find() trouvé dans mdn
    // const inventaire = [
    //     {nom: 'pommes', quantité: 2},
    //     {nom: 'bananes', quantité: 0},
    //     {nom: 'cerises', quantité: 5}
    //   ];
    // const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
    // console.log(resultat); 

let cameras = [];
let response = fetch('./html/product.html?id=${cameras._id}') 
console.log(response);

const SelectedIdProduct = response.find((element) => element._id === leId);
console.log(SelectedIdProduct);