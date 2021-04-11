//RECUPERATION DES CAMERAS DANS LE PANIER  ET TRADUCTION DU LANGAGE EN JSON//
let monPanier = localStorage.getItem("panier");
let panierTotal = JSON.parse(monPanier);
console.log(panierTotal)



// PANIER //
// UNE BOUCLE "FOR" POUR AFFICHER LES INFORMATIONS DE CHAQUE CAMERA DANS LE PANIER //
for(let i = 0; i < panierTotal.length; i++) {

    // INSERTION DU TABLEAU //
    let monTableau = document.getElementById("table");
    let ligne = monTableau.insertRow();
    tbody.appendChild(ligne);

    // AFFICHER LE NOM DE CHAQUE CAMERAS //
    let cell = ligne.insertCell(0);
    ligne.appendChild(cell);
    cell.textContent = panierTotal[i].name;

    // CREATION DU BOUTTON "SUPPRIMER" //
    let cell1 = ligne.insertCell(1);
    ligne.appendChild(cell1);
    let boutton = document.createElement("button");
    boutton.setAttribute("id", panierTotal[i].id);
    cell1.appendChild(boutton);
    boutton.textContent = "Supprimer l article";

    // PRIX TOTAL EN EUROS//
    let cell2 = ligne.insertCell(2);
    ligne.appendChild(cell1);
    cell2.textContent = panierTotal[i].price + " €";

// CREATION DU BOUTTON "SUPPRIMER" QUI PERMET DE SUPRIMER N"IMPORTE QUEL CAMERA QUI SE TROUVE DANS LE PANIER //
    boutton.addEventListener("click", function() {
        panierTotal.splice(i, 1)
        localStorage.setItem("panier", JSON.stringify(panierTotal))
        window.location.reload()
    });
};
// INDIQUER LE PRIX TOTAL DES COMMANDES //
let prixTotal = [];
//L UTILISATION DE LA BOUCLE "FOR" POUR REPRENDRE TOUS LES PRIX DES CAMERAS PRESENTES DANS LE PANIER //
for (let m = 0; m < panierTotal.length; m++) {
    let prixProduit = panierTotal[m].price;

    prixTotal.push(prixProduit)

    console.log(prixTotal);
}
// L4UTILISATION DU "REDUCER" PERMET D"ADDITIONNER TOUS LES PRIX DES CAMERAS PRESENTS DANS LE PANIER POUR FAIRE LE TOTAL //
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prix = prixTotal.reduce(reducer, 0);
console.log(prix);
//lA RECUPERATION DU TOTAL DANS LE LOCAL STORAGE//
localStorage.setItem("total", JSON.stringify(prix));
const affichage = `<th class= "prixTotal">${prix} €</th>`


thead2.insertAdjacentHTML("beforeend", affichage);


// FORMULAIR//
// CODE PERMETTANT DE REAGIR EN FONCTION DE CE QUE L"UTILISATEUR MET DANS LES CHAMPS DU FORMULAIRE EN METTANT DES CONDITIONS AVEC "IF" ET "ELSE" //
let testPassed = 0;

function myFun() {

    (firstName = document.getElementById("firstname")),
    (lastName = document.getElementById("lastname")),
    (address = document.getElementById("address")),
    (email = document.getElementById("email")),
    (city = document.getElementById("city")),
    (message = document.getElementsByClassName("message")),
    (icon = document.querySelector("i"));
    (sucess = document.getElementsByClassName("sucess")),
    (error = document.getElementsByClassName("error"));

    testPassed = 0;

// VALIDATION POUR LE PRENOM //

if(firstName.value == "") {

    firstName.style.borderColor = "red";
    message[0].style.visibility = "visible";
    message[0].style.color = "red";
    message[0].innerText = "Merci d indiquer votre prénom";
    error[0].style.visibility = "visible";
    error[0].style.color = "red";
}else if(firstName.value.length < 3&&firstName.value.length > 0) {

    firstName.style.borderColor = "red";
    message[0].style.visibility = "visible";
    message[0].style.color = "red";
    message[0].innerText = "Votre prénom doit comptenir au moins trois lettres";
    error[0].style.visibility = "visible";
    error[0].style.color = "red";   

}else if(firstName.value.length > 3&&(isNaN(parseFloat(firstName.value)))) {

    firstName.style.borderColor = "green";
    error[0].style.visibility = "hidden";
    message[0].style.visibility = "hidden";
    sucess[0].style.visibility = "visible";
    sucess[0].style.color = "green";

    testPassed++;

}else {

    firstName.style.borderColor = "red";
    message[0].style.visibility = "visible";
    message[0].style.color = "red";
    message[0].innerText = "Votre prénom ne doit pas comptenir des chiffres";
    error[0].style.visibility = "visible";
    error[0].style.color = "red";
}

// VALIDATION POUR LE NOM //

if(lastName.value == "") {

    lastName.style.borderColor = "red";
    message[1].style.visibility = "visible";
    message[1].style.color = "red";
    message[1].innerText = "Merci d indiquer votre nom";
    error[1].style.visibility = "visible";
    error[1].style.color = "red";
}
else if(lastName.value.length < 3&&lastName.value.length > 0) {

    lastName.style.borderColor = "red";
    message[1].style.visibility = "visible";
    message[1].style.color = "red";
    message[1].innerText = "Votre nom doit comptenir au moins trois lettres";
    error[1].style.visibility = "visible";
    error[1].style.color = "red";
}
else if(lastName.value.length > 3&&(isNaN(parseFloat(lastName.value)))) {

    lastName.style.borderColor = "green";
    error[1].style.visibility = "hidden";
    message[1].style.visibility = "hidden";
    sucess[1].style.visibility = "visible";
    sucess[1].style.color = "green";

    testPassed++;
}
else {

    lastName.style.borderColor = "red";
    message[1].style.visibility = "visible";
    message[1].style.color = "red";
    message[1].innerText = "Votre nom ne doit pas comptenir des chiffres";
    error[1].style.visibility = "visible";
    error[1].style.color = "red";
}

// VALIDATION POUR L"ADRESSE POSTALE //


if(address.value=="") {

    address.style.borderColor = "red";
    message[2].style.visibility = "visible";
    message[2].style.color = "red";
    message[2].innerText = "Merci d indiquer votre adresse postale";
    error[2].style.visibility = "visible";
    error[2].style.color = "red";
}
else if(address.value.length < 3&&address.value.length > 0) {

    address.style.borderColor = "red";
    message[2].style.visibility = "visible";
    message[2].style.color = "red";
    message[2].innerText = "Votre adresse doit comptenir au moins 3 lettres";
    error[2].style.visibility = "visible";
    error[2].style.color = "red";
}
else {
    address.style.borderColor = "green";
    error[2].style.visibility = "hidden";
    message[2].style.visibility = "hidden";
    sucess[2].style.visibility = "visible";
    sucess[2].style.color = "green";

    testPassed++;
}

// VALIDATION POUR L"ADRESSE MAIL //
    
    if(email.value=="") {
        email.style.borderColor = "red";
        message[3].style.visibility = "visible";
        message[3].style.color = "red";
        message[3].innerText = "Merci d indiquer votre adresse mail";
        error[3].style.visibility = "visible";
        error[3].style.color = "red";
    }

    else if(email.value.indexOf("@") < 3 || email.value.lastIndexOf(".") >= email.value.length - 2) {
        email.style.borderColor = "red";
        message[3].style.visibility = "visible";
        message[3].style.color = "red";
        message[3].innerText = "Adresse mail non valide";
        error[3].style.visibility = "visible";
        error[3].style.color = "red";
    }
    else {
        email.style.borderColor = "green";
        error[3].style.visibility = "hidden";
        message[3].style.visibility = "hidden";
        sucess[3].style.visibility = "visible";
        sucess[3].style.color = "green";

        testPassed++;
    }

    // VALIDATION POUR LA VILLE //

    if(city.value == "") {
        city.style.borderColor = "red";
        message[4].style.visibility = "visible";
        message[4].style.color = "red";
        message[4].innerText = "Merci d indiquer votre ville";
        error[4].style.visibility = "visible";
        error[4].style.color = "red";
    }

    else if(city.value.length < 3&&city.value.length > 0) {
        city.style.borderColor = "red";
        message[4].style.visibility = "visible";
        message[4].style.color = "red";
        message[4].innerText = "Votre nom de la ville doit comptenir au moins 3 lettres";
        error[4].style.visibility = "visible";
        error[4].style.color = "red";
    }
    
    else if(city.value.length > 3&&(isNaN(parseFloat(city.value)))) {
        city.style.borderColor = "green";
        error[4].style.visibility = "hidden";
        message[4].style.visibility = "hidden";
        sucess[4].style.visibility = "visible";
        sucess[4].style.color = "green";

        testPassed++;

    }

    else {
        city.style.borderColor = "red";
        message[4].style.visibility = "visible";
        message[4].style.color = "red";
        message[4].innerText = "Votre nom de la ville ne doit pas comptenir des chiffres";
        error[4].style.visibility = "visible";
        error[4].style.color = "red";
    }
    return false;

}

// ENVOYER LE FORMULAIRE AU SERVEUR DE L"API //

// METHODE POST //
let myform = document.getElementById("myform");
        

myform.addEventListener("submit", (e) => {
        
    e.preventDefault()
   // window.location.href = 'validation.html';//
    myFun();


    let input = document.getElementsByTagName("input");
    if(testPassed == input.length) {

        const contact = {
        
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,

        };

        localStorage.setItem("validation", JSON.stringify(contact));

        const products = [];
        
        for(let i = 0; i < panierTotal.length; i++) {
            products.push(panierTotal[i].id);
            localStorage.setItem("id", JSON.stringify(products)); 
        }

        const command = {

            //JSON.stringify({}//
                
            contact: contact,
            products: products,
        };
        
        console.log(command)


        function data() {

            fetch("http://localhost:3000/api/cameras/order", {
      
              method: "POST",
      
              headers: {
      
                "Content-Type": "application/json",
              },
      
              body: JSON.stringify(command),
      
            })
            
            //promesse //
            .then((response) => response.json()) 
            //aboutissement de la promesse //
            .then(response => {
      
              console.log(response); 
              window.location.href = 'validation.html';   
      
          });
        }
      
        } else {
      
          console.error("Ce formulaire est invalide !");
        }
        data();
       
});
      

/*document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();

    let erreur;
    let prenom = document.getElementById("prenom");
    let firstname = /[a-zA-ZÀ-ÿ]/;

    let nom = document.getElementById("nom");
    let name = /[a-zA-Z]/;

    let adresse = document.getElementById("adresse");
    let boxmail = /[a-zA-Z0-9_]/;

    let ville = document.getElementById("ville");
    let city = /[a-zA-Z]/;

    let mail = document.getElementById("mail");
    let email = /[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}/;





    if(ville.value == "") {

        erreur = "Entrez votre ville svp";

    } else if (!city.test(ville)) {

        erreur = "Ceci n"est pas le nom d"une ville";


    }

    if(mail.value == "") {

        erreur = "Entrez votre adresse mail svp";


    } else if (!email.test(mail.value)) {

        erreur = "Ceci n"est pas un adresse mail valide";


    }

    if(adresse.value == "") {

        erreur = "Entrez votre adresse postale svp";

    } else if (!boxmail.test(adresse.value)) {

        erreur = "Ceci n"est pas un adresse postale";

    }

    if(nom.value == "") {

        erreur = "Entrez votre nom de famille svp";
    }

    else if (!name.test(nom.value))  {

        erreur = "Ceci n"est pas un nom de famille";


    }

    if(prenom.value == "") {

        erreur = "Entrez votre prénom svp";


    } else if (!firstname.test(prenom.value)) {

        erreur = "Ceci n"est pas un prénom";
    }

    if(erreur) {
        document.getElementById("erreur").innerHTML = erreur;
    }
    else {
        alert("PAYMENT PRÊT À ÊTRE ENVOYÉ");
    }

    let contact = {

        firstName: prenom.value,
        lastName: nom.value,
        address: adresse.value,
        city: ville.value,
        mail: mail.value,

    };

    localStorage.setItem("contact", JSON.stringify(contact));


    let products = [];

    for(let i = 0; i < panierTotal.length; i++) {
        products.push(panierTotal[i].id);
        localStorage.setItem("id", JSON.stringify(products));

    };

    const request = {

        contact : contact,
        products : products,

    }

 fetch("http://localhost:3000/api/cameras/order", {

        method: "POST",
        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(request)

    })

    .then(response => response.json())
    .then((json) => {
        console.log("response", json);
        window.location.href = "confirmation.html";
    })

    .catch(err => console.log("erreur : " + response.status))

});*/
