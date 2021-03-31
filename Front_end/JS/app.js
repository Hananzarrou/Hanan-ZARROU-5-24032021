// CREATION DE l API AVEC FETCH
fetch('http://localhost:3000/api/cameras')
    .then(res => res.json())
    .then(data => {

        
 // UNE BOUCLE FOR POUR ITERER 5 CARDS PRINCIPALES
        for(let i = 0; i < data.length; i++) {
// STRUCTURE HTML DES CARDS
        
            let main = document.querySelector('#main');


            let camera = document.createElement('div');
            camera.setAttribute("class", 'photo');
            main.appendChild(camera);

            let image = document.createElement('img');
            image.setAttribute("class", 'image');
            image.src = data[i].imageUrl;
            camera.appendChild(image);

            let nom = document.createElement('p');
            nom.setAttribute("class", 'nom');
            nom.textContent = data[i].name;
            camera.appendChild(nom);

            let prix = document.createElement('p');
            prix.setAttribute("class", 'prix');
            prix.textContent = data[i].price / 100 + ' €';
            camera.appendChild(prix);
// CREATION DU BOUTON LIEN VERS PAGE PRODUIT               
            let produit = document.createElement('button');
            produit.setAttribute("class", 'btn-produit');
            produit.textContent = `Voir le Produit`;
            camera.appendChild(produit);

//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON  
//au clic, le bouton exécute la fonction
            produit.addEventListener('click', (e) => {
                e.preventDefault()
//redirection vers la page de camera                
                window.location = 'camera.html?id=' + data[i]._id;

            });
        
        }

        console.log(data);

})

.catch(error => alert("Erreur : " + error));


