let total = localStorage.getItem("total");
let resultat = JSON.parse(total);

let commande = localStorage.getItem("id");
let identite = JSON.parse(commande);
console.log(identite)

let contact = localStorage.getItem("validation");
console.log(contact)


let div = document.createElement('div');
div.id = "div1";

let validatt = document.getElementById("validation")
//validationCommande.textContent = identite;//
//let validation = document.getElementById("div1");//
validatt.appendChild(div);

let title = document.createElement("h1");
div.appendChild(title);
title.textContent = "Vous trouvez un récapitulatif de votre commande"

let pcontact = document.createElement("p");
pcontact.classList.add("text-center", "font-weight-bold");
div.appendChild(pcontact);
pcontact.textContent = contact;

let titre = document.createElement("h1");
div.appendChild(titre);
titre.textContent = "vous trouvez l'identifiant de votre commande"


let validationCommande = document.createElement("p")
validationCommande.textContent = identite;
let validation = document.getElementById("div1");
validation.appendChild(validationCommande);

let montant = document.createElement("h1");
montant.classList.add("text-center", "font-weight-bold");
div.appendChild(montant);
montant.textContent = "Montant total de votre commande"


let validationTotal = document.createElement("p");
validationTotal.classList.add("text-center", "font-weight-bold", "color-blue");
validationTotal.textContent = resultat + " €";

validation.appendChild(validationTotal);

// remplacement des variable
/*let HTMLOrder = document.getElementById("div1")
let myHTMLOrder = ""

let HTMLArticles = document.getElementById("div1")
let myHTMLArticles = ""

// modification de text

myHTMLOrder = `<h1>
<i class="fas fa-check"></i>    
Nous vous remercions 
  ${contact.firstName} ${contact.lastName} pour votre commande. Voici l'identifiant de votre achat : <br></h1>
  <p>Votre Commande a été effectuée avec succes <br>Vous recevrez votre commande dans les plus bref délais </p>`

HTMLOrder.innerHTML = myHTMLOrder*/







//recuperation de commande
/*let monPanier = localStorage.getItem("panier");
let panierTotal = JSON.parse(monPanier);
console.log('panierTotal', panierTotal);

let firstName = document.getElementById("prenom");

let lastName = document.getElementById("nom");



let contact = {
    
    prenom: "",
    nom: "",
};
let contact = panierTotal.contact
let products = panierTotal.products
let orderId =  panierTotal.orderId


// recuperation commande
products.forEach(article_order =>{

	// modification du prix
	let originalPrice = article_order.price /100
  	let newPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(originalPrice)

  	// modification html
  	myHTMLArticles += `<div class="ordered_article">
					<img src="${article_order.imageUrl}">
					<div>
						<p>${article_order.name}</p>
						<p>${newPrice}</p>
					</div>
				</div>`

	newTotalPrice =  newTotalPrice + article_order.price

	console.log(myHTMLArticles)
	console.log(newTotalPrice)

	HTMLArticles.innerHTML = myHTMLArticles
	totalPrice.innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(newTotalPrice/100)
})*/


