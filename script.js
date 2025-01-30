document.addEventListener('DOMContentLoaded', () => {
  const produits = document.querySelectorAll('.card');
  const elementPrixTotal = document.querySelector('.total');
  let prixTotal = 0

  produits.forEach(produit => {
      const boutonPlus = produit.querySelector('.fa-plus-circle');
      const boutonMoins = produit.querySelector('.fa-minus-circle');
      const boutonPoubelle = produit.querySelector('.fa-trash-alt');
      const boutonCoeur = produit.querySelector('.fa-heart');
      const elementQuantite = produit.querySelector('.quantity');
      const elementPrixUnitaire = produit.querySelector('.unit-price');
      let quantite = 0;
      const prixUnitaire = parseFloat(elementPrixUnitaire.textContent.replace('$', ''));

      // Partie Ajouter un article

      boutonPlus.addEventListener('click', () => {
          quantite++;
          elementQuantite.textContent = quantite;
          mettreAJourPrixTotal(prixUnitaire)
      });
      
      // Retirer un Produit du panier

      boutonMoins.addEventListener('click', () => {
          if (quantite > 0) {
              quantite--;
              elementQuantite.textContent = quantite;
              mettreAJourPrixTotal(-prixUnitaire);
          }
      })
      
      // Aimer un Produit  

      boutonPoubelle.addEventListener('click', () => {
          mettreAJourPrixTotal(-prixUnitaire * quantite);
          quantite = 0
          elementQuantite.textContent = quantite;
      });

      boutonCoeur.addEventListener('click', () => {
          boutonCoeur.classList.toggle('liked');
      })
  });

      // Afficher le prix total des Produits dans le pânior
  function mettreAJourPrixTotal(montant) {
      prixTotal += montant;
      elementPrixTotal.textContent = `${prixTotal.toFixed(2)} $`;
  }
});
