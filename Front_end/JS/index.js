//  RECUPERATION DE L'API AVEC FETCH 
fetch('http://localhost:3000/api/cameras')
    .then(res => res.json())
    .then(data => {

        
 // UNE BOUCLE FOR POUR STRUCTURER LES 5 CARTES
        for(let i = 0; i < data.length; i++) {
// STRUCTURE HTML DES CARTES
        
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
// CREATION DU BOUTON LIEN VERS PAGE CAMERA              
            let produit = document.createElement('button');
            produit.setAttribute("class", 'btn-produit');
            produit.textContent = `Voir le Produit`;
            camera.appendChild(produit);
//FONCTION DE RECUPERATION DE L'URL PAGE CAMERA    

/*function url() {

    //récupération de l'id de chaque camera
            let getUrl = "?id=" + data[i]._id; 
    //redirection vers la page de camera 
            window.location.href = "./Front_end/camera.html" + getUrl;
}*/

//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON  
//au clic, le bouton exécute la fonction
            produit.addEventListener('click', (e) => {
                e.preventDefault()
//REDIRECTION VERS LA PAGE CAMERA              
                window.location = 'camera.html?id=' + data[i]._id;

            });
        
        }

        console.log(data);

})
// LE CATCH PERMET D'EVITER LE BUG DE L'APPLICATION EN CAS D'ERREUR //
.catch(error => alert("Erreur : " + error));


