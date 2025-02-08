document.addEventListener('DOMContentLoaded', () => {
    const produits = document.querySelectorAll('.card');
    const elementPrixTotal = document.querySelector('.total');
    let prixTotal = 0;
  
    produits.forEach(produit => {
        const boutonPlus = produit.querySelector('.fa-plus-circle');
        const boutonMoins = produit.querySelector('.fa-minus-circle');
        const boutonPoubelle = produit.querySelector('.fa-trash-alt');
        const boutonCoeur = produit.querySelector('.fa-heart');
        const elementQuantite = produit.querySelector('.quantity');
        const elementPrixUnitaire = produit.querySelector('.unit-price');
        let quantite = 0;
        const prixUnitaire = parseFloat(elementPrixUnitaire.textContent.replace('$', ''));
  
            // Ajouter un article dans le panier
        boutonPlus.addEventListener('click', () => {
            quantite++;
            elementQuantite.textContent = quantite;
            mettreAJourPrixTotal(prixUnitaire);
        });
        
            // Retirer un article 

        boutonMoins.addEventListener('click', () => {
            if (quantite > 0) {
                quantite--;
                elementQuantite.textContent = quantite;
                mettreAJourPrixTotal(-prixUnitaire);
            }
        });
        
            // Supprimer un article du panier

        boutonPoubelle.addEventListener('click', () => {
            produit.remove();
            mettreAJourPrixTotal(-quantite * prixUnitaire);
        });
        
            // Aimer un aricle

        boutonCoeur.addEventListener('click', () => {
            boutonCoeur.classList.toggle('liked');
        });
    });
  
            // Mettre a jour le prix des article a chaque fois que l'on retire ajoute ou suprime un article

    function mettreAJourPrixTotal(montant) {
        prixTotal += montant;
        elementPrixTotal.textContent = `${prixTotal.toFixed(2)} $`;
    }
  });
  // Ajouter un article par défaut dans le panier
  if (produit.classList.contains('default-item')) {
    quantite = 1;
    elementQuantite.textContent = quantite;
    mettreAJourPrixTotal(prixUnitaire);
};
