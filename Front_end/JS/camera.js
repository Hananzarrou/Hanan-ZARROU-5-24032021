// RECUPERATION DE L'ID DANS L'URL
const urlCamera = new URLSearchParams(window.location.search);
const idCamera = urlCamera.get("id");

//FONCTION POUR RECUPERER UN CAMERA PAR SON ID UNIQUE 
function getCamera(data, idCamera) {

    let myCamera = data.find(data => data["id"] == idCamera);

}
// RECUPERATION DE L'URL AVEC ID
fetch('http://localhost:3000/api/cameras/' + idCamera)
.then(res => res.json())
.then(myCamera => {

// CREATION DU CONTENU DE L'ELEMENT CARTE (CAMERA)    
    let section = document.querySelector('.camera');


    let camera = document.createElement('div');
    camera.setAttribute("class", 'picture');
    section.appendChild(camera);

    
    let image = document.createElement('img');
    image.setAttribute("class", 'image2');
    image.src = myCamera.imageUrl;
    camera.appendChild(image);

    let nom = document.createElement('p');
    nom.setAttribute("class", 'name2');
    nom.textContent = myCamera.name;
    camera.appendChild(nom);

    let prix = document.createElement('p');
    prix.setAttribute("class", 'price2');
    prix.textContent = myCamera.price / 100 + ' €';
    camera.appendChild(prix);

    let description = document.createElement('p');
    description.setAttribute("class", 'description');
    description.textContent = myCamera.description;
    camera.appendChild(description);
    

    let lentille = document.createElement('select');
    lentille.setAttribute("id", 'liste');
    camera.appendChild(lentille);
    let myLenses = myCamera.lenses;

//BOUCLE POUR CREER LES OPTIONS LENTILLES

    for(let i = 0; i < myLenses.length; i++) {
        let el = document.createElement("option");
        el.textContent = myLenses[i];
        liste.appendChild(el);
    }

// CREATION DU BOUTON D'AJOUT DES PRODUITS AU PANIER
    let boutton = document.createElement('button');
    boutton.setAttribute("class", 'btn-produit2');
    boutton.textContent = `Ajouter au Panier`;
    camera.appendChild(boutton);

//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON ARTICLE AJOUTE     
    boutton.addEventListener('click', (e) => {
          
        const produit = {

            id: myCamera._id,
            name: myCamera.name,
            price: myCamera.price / 100,
            image: myCamera.imageUrl,
        
        };
// on ajoute les produits au localStorage à chaque sélection
        let products = JSON.parse(localStorage.getItem("panier"))
        
        if(products) {

            products.push(produit)
            localStorage.setItem("panier", JSON.stringify(products))

        }
        else {

            let produitList = []
            produitList.push(produit)
            localStorage.setItem("panier", JSON.stringify(produitList))
        }
//LE NAVIGATEUR NE CHANGE PAS DE PAGE AVEC PREVENTDEFANT
        e.preventDefault()
        
        alert("Votre produit a été ajoutée au panier");
//REVOI 0 LA PAGE PANIER
        window.location.href = 'panier.html';
         
    });
    console.log(myCamera);


})

.catch(error => alert("Erreur : " + error));
