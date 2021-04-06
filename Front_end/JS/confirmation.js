let total = localStorage.getItem("total");
let resultat = JSON.parse(total);

let commande = localStorage.getItem("id");
let identite = JSON.parse(commande);
console.log(identite)


let div = document.createElement('div');
div.id = "div1";
let validationCommande = document.createElement("p")
validationCommande.textContent = identite;
let validation = document.getElementById("div1");
validation.appendChild(validationCommande);


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

// remplacement des variable
let HTMLOrder = document.getElementById("confirmation_text")
let myHTMLOrder = ""

let HTMLArticles = document.getElementById("purchase_articles")
let myHTMLArticles = ""

let totalPrice = document.getElementById("total_price")
let newTotalPrice = 0

// modification de text




myHTMLOrder = `<h1 class="big_title">Merci ${contact.firstName} ${contact.lastName} pour votre commande. Voici l'identifiant de votre achat : <br></h1>
				<p class="purchase_id">${orderId}</p>`

HTMLOrder.innerHTML = myHTMLOrder

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


