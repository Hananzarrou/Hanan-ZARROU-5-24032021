let monPanier = localStorage.getItem("panier");
let panierTotal = JSON.parse(monPanier);
console.log('panierTotal', panierTotal);



// PANIER //

for(let i = 0; i < panierTotal.length; i++) {

    let monTableau = document.getElementById("table");
    let ligne = monTableau.insertRow();
    tbody.appendChild(ligne);

    let cell = ligne.insertCell(0);
    ligne.appendChild(cell);
    cell.textContent = panierTotal[i].name;

    let cell1 = ligne.insertCell(1);
    ligne.appendChild(cell1);
    let boutton = document.createElement("button");
    boutton.setAttribute("id", panierTotal[i].id);


    cell1.appendChild(boutton);
    boutton.textContent = "Supprimer";

    let cell2 = ligne.insertCell(2);
    ligne.appendChild(cell1);
    cell2.textContent = panierTotal[i].price + " €";

// BOUTTON "SUPPRIMER" //
    boutton.addEventListener("click", function() {
        panierTotal.splice(i, 1)
        localStorage.setItem("panier", JSON.stringify(panierTotal))
        window.location.reload()


    });
};
// INDIQUER LE PRIX TOTAL DES COMMANDES //
let prixTotal = [];

for (let m = 0; m < panierTotal.length; m++) {
    let prixProduit = panierTotal[m].price;

    prixTotal.push(prixProduit)

    console.log(prixTotal);

}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prix = prixTotal.reduce(reducer, 0);
console.log(prix);

const affichage = `<th class= "prixTotal">${prix} €</th>`


thead2.insertAdjacentHTML("beforeend", affichage);


// FORMULAIR//
let testPassed = 0;

function myFun() {

    firstName = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    address = document.getElementById('address'),
    email = document.getElementById('email'),
    city = document.getElementById('city'),
    message = document.getElementsByClassName('message'),
    icon = document.querySelector('i');
    sucess = document.getElementsByClassName('sucess'),
    error = document.getElementsByClassName('error')

    testPassed = 0;

// VALIDATION POUR LE PRENOM //


if(firstName.value == "") {

    firstName.style.borderColor = 'red';
    message[0].style.visibility = 'visible';
    message[0].style.color = 'red';
    message[0].innerText = 'Merci d indiquer votre prénom';
    error[0].style.visibility = 'visible';
    error[0].style.color = 'red';
    

}

else if(firstName.value.length < 3&&firstName.value.length > 0) {

    firstName.style.borderColor = 'red';
    message[0].style.visibility = 'visible';
    message[0].style.color = 'red';
    message[0].innerText = 'Votre prénom doit comptenir au moins trois lettres';
    error[0].style.visibility = 'visible';
    error[0].style.color = 'red';

    

}

else if(firstName.value.length > 3&&(isNaN(parseFloat(firstName.value)))) {

    firstName.style.borderColor = 'green';
    error[0].style.visibility = 'hidden';
    message[0].style.visibility = 'hidden';
    sucess[0].style.visibility = 'visible';
    sucess[0].style.color = 'green';

    testPassed++;

}

else {

    firstName.style.borderColor = 'red';
    message[0].style.visibility = 'visible';
    message[0].style.color = 'red';
    message[0].innerText = 'Votre prénom ne doit pas comptenir des chifres';
    error[0].style.visibility = 'visible';
    error[0].style.color = 'red';

}

// VALIDATION POUR LE NOM //


if(lastName.value == "") {

    lastName.style.borderColor = 'red';
    message[1].style.visibility = 'visible';
    message[1].style.color = 'red';
    message[1].innerText = 'Merci d indiquer votre nom';
    error[1].style.visibility = 'visible';
    error[1].style.color = 'red';
    

}

else if(lastName.value.length < 3&&lastName.value.length > 0) {

    lastName.style.borderColor = 'red';
    message[1].style.visibility = 'visible';
    message[1].style.color = 'red';
    message[1].innerText = 'Votre nom doit comptenir au moins trois lettres';
    error[1].style.visibility = 'visible';
    error[1].style.color = 'red';


}

else if(lastName.value.length > 3&&(isNaN(parseFloat(lastName.value)))) {

    lastName.style.borderColor = 'green';
    error[1].style.visibility = 'hidden';
    message[1].style.visibility = 'hidden';
    sucess[1].style.visibility = 'visible';
    sucess[1].style.color = 'green';

    testPassed++;

}

else {

    lastName.style.borderColor = 'red';
    message[1].style.visibility = 'visible';
    message[1].style.color = 'red';
    message[1].innerText = 'Votre nom ne doit pas comptenir des chifres';
    error[1].style.visibility = 'visible';
    error[1].style.color = 'red';

}



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

        erreur = "Ceci n'est pas le nom d'une ville";


    }

    if(mail.value == "") {

        erreur = "Entrez votre adresse mail svp";


    } else if (!email.test(mail.value)) {

        erreur = "Ceci n'est pas un adresse mail valide";


    }

    if(adresse.value == "") {

        erreur = "Entrez votre adresse postale svp";

    } else if (!boxmail.test(adresse.value)) {

        erreur = "Ceci n'est pas un adresse postale";

    }

    if(nom.value == "") {

        erreur = "Entrez votre nom de famille svp";
    }

    else if (!name.test(nom.value))  {

        erreur = "Ceci n'est pas un nom de famille";


    }

    if(prenom.value == "") {

        erreur = "Entrez votre prénom svp";


    } else if (!firstname.test(prenom.value)) {

        erreur = "Ceci n'est pas un prénom";
    }

    if(erreur) {
        document.getElementById("erreur").innerHTML = erreur;
    }
    else {
        alert('PAYMENT PRÊT À ÊTRE ENVOYÉ');
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

 fetch('http://localhost:3000/api/cameras/order', {

        method: "POST",
        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(request)

    })

    .then(response => response.json())
    .then((json) => {
        console.log('response', json);
        window.location.href = 'confirmation.html';
    })

    .catch(err => console.log("erreur : " + response.status))

});*/
