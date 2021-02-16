const lithoDB = {
    id: '', // identification numéraire de la pierre
    name: '', // nom de la pierre
    color: '', // couleur de la pierre
    quantity: '', // quantité en stock
    state: '', // état : brut ou polie
};

// montre le stock (affiche la table complète lithoDB)
function runShowBDD() {
    // affiche la base de donnée sous forme d'un tableau
    // cf 11.1 ???
    // for i=0 à i <= lithoDB.length i++ faire
    /*<table>
        <tr>
            <td>id1</td>
            <td>name1</td>
            <td>color1</td>
            <td>quantity1</td>
            <td>state1</td>
        </tr>
        <tr>
            <td>id2</td>
            <td>name2</td>
            <td>color2</td>
            <td>quantity2</td>
            <td>state2</td>
        </tr>
    </table>*/
    // mettre en forme la table créée via style.css
}

// ajoute une nouvelle entrée à lithoDB
function runNewEntry() {
    // affiche input text après nom
    // affiche input text après couleur
    // affiche input text après quantité
    // incrémente l'id à chaque nouvelle entrée
}

// ajoute une quantité à une pierre existante dans le stock
function runAddQuantity() {
    // affiche input text après nom de la pierre à modifier
    // affiche input text après quantité à ajouter
    // ajoute la quantité indiquée à celle déjà présente dans lithoDB
}

// supprime une quantité à une pierre existante dans le stock et éventuellement affiche 0 si plus dans le stock
function runSuppQuantity() {
    // affiche input text après nom de la pierre à modifier
    // affiche input text après quantité à retirer
    // retire la quantité indiquée à celle déjà présente dans lithoDB
    // affiche 0 si il n'y en a plus mais garde la pierre présente dans lithoDB
}

// onclick sur le bouton Montrer le stock
document.getElementById("showBDD").addEventListener('click', () => {
    runShowBDD();
});

// onclick sur le bouton Nouvelle entrée
document.getElementById("newEntry").addEventListener('click', () => {
    runNewEntry();
});

// onclick sur le bouton Ajouter une quantité
document.getElementById("addQuantity").addEventListener('click', () => {
    runAddQuantity();
});

// onclick sur le bouton Supprimer une quantité
document.getElementById("suppQuantity").addEventListener('click', () => {
    runSuppQuantity();
});