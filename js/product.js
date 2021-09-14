// Récupération de l'id du produit
const chaineDeRequeteUrl_id = window.location.search;
console.log('ok');

// Extraire le texte de la chaine de requète pour ne récupérer que l'id
const leId = chaineDeRequeteUrl_id.slice(4);
console.log(leId);

// affichage du produit sélectionné
    // utilisation de la methode array.prototype.find()
    // const inventaire = [
    //     {nom: 'pommes', quantité: 2},
    //     {nom: 'bananes', quantité: 0},
    //     {nom: 'cerises', quantité: 5}
    //   ];
    // const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
    // console.log(resultat); 
    
const SelectedIdProduct = response.find((element) => element._id === leId);
console.log(SelectedIdProduct);
