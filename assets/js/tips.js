// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/indexeddb/

// renvoie un objet IDBOpenRequest et effectue l'opération d'ouverture de la connextion à la base de données de manière asynchrone.
// si l'ouverture réussit, un événement success est délenché sur l'objet IDBOpenRequest renvoyé par open().
// la propriété result de cet événement aura alors comme valeur la valeur de l'objet IDBDatabase associé à la connexion.
// si l'ouverture échoue, un événement error est délcenché sur l'objet IDBOpenRequest renvoyé par open()
// la version de la base de données détermine son organisation et notamment les objets stockés et leur structure.
// Par défaut, le numéro de version retenu est 1

/*let lithoDB = '';
let openRequest = indexedDB.open('lithoDB', 1);
openRequest.onupgradeneeded = function() {
    lithoDB = openRequest.result;
    //Opérations

    // si l'objet de stockage users n'existe pas, on le crée
    if (!lithoDB.objectStoreNames.contains('users')) {
        lithoDB.createObjectStore('users', { keypath: 'id' });
    }
}
openRequest.onerror = function() {
    alert('Impossible d\'accéder à IndexedDB');
}
openRequest.onsuccess = function() {
    lithoDB = openRequest.result;
    //Opérations
}*/

/*Décommenter pour voir le résultat
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function() {
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id' });
    }
};

openRequest.onerror = function() {
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function() {
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');

    transaction.oncomplete = function() {
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');

    let user = {
        id: 1,
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };

    let ajout = users.add(user);

    ajout.onsuccess = function() {
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };

    ajout.onerror = function() {
        alert('Erreur : ' + ajout.error);
    };
};*/

/*Décommenter pour voir le résultat
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')){
        db.createObjectStore('users', {keyPath: 'id'});
    }
};

openRequest.onerror = function(){
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function(){
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');
    
    transaction.oncomplete = function(){
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');
    
    let user = {
        id: 1,
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };
    
    let ajout = users.put(user);
    
    ajout.onsuccess = function(){ 
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };
    
    ajout.onerror = function(){
        alert('Erreur : ' + ajout.error);
    };
    
    let lire = users.get(1);
    lire.onsuccess = function(){ 
        alert('Nom de l\'utilisateur 1 : ' + lire.result.prenom);
    };
    
    lire.onerror = function(){
        alert('Erreur : ' + lire.error);
    };
};
*/

/*Décommenter pour voir le résultat
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')){
        db.createObjectStore('users', {keyPath: 'id'});
    }
};

openRequest.onerror = function(){
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function(){
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');
    transaction.oncomplete = function(){alert('Transaction terminée');};
    let users = transaction.objectStore('users');
    
    let user = {
        id: 1,
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };
    
    let ajouter = users.put(user);
    ajouter.onsuccess = function(){ 
        alert('Utilisateur ajouté avec la clef ' + ajouter.result);
    };
    ajouter.onerror = function(){
        alert('Erreur : ' + ajouter.error);
    };
    
    let lire = users.get(1);
    lire.onsuccess = function(){ 
        alert('Nom de l\'utilisateur 1 : ' + lire.result.prenom);
    };
    lire.onerror = function(){
        alert('Erreur : ' + lire.error);
    };
    
    let supprimer = users.delete(1);
    supprimer.onsuccess = function(){ 
        alert('Utilisateur supprimé de la base de données');
    };
    supprimer.onerror = function(){
        alert('Erreur : ' + supprimer.error);
    };
};
*/