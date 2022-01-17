
let n=1;


document.getElementById("AJOUTER").onclick = function(){
    
    let nom = document.createElement("p");
    nom.innerHTML = "nome et prenom";
    let ajouteNom = document.createElement("input");
   ajouteNom.placeholder = "Nome et prenom";
   ajouteNom.type = "text";
    document.getElementById("list-ajouter").appendChild(nom);
    document.getElementById("list-ajouter").appendChild(ajouteNom).value;
    let Date = document.createElement("p");
    Date.innerHTML = "Date de Naissance";
    let ajouteDate = document.createElement("input");
    ajouteDate.type = "date";
    document.getElementById("list-ajouter").appendChild(Date);
    document.getElementById("list-ajouter").appendChild(ajouteDate).value;
    
    let num = document.createElement("p");
    num.innerHTML = "Numero de Télèphone";
    let ajouteNum = document.createElement("input");
    ajouteNum.type = "number";
    ajouteNum.placeholder = "numero de tele";
    document.getElementById("list-ajouter").appendChild(num);
    document.getElementById("list-ajouter").appendChild(ajouteNum).value;
    let entr =document.getElementById("entr");
    let button = document.createElement("button");
    button.innerHTML = "confermé";
    document.getElementById("list-ajouter").appendChild(entr);
    document.getElementById("list-ajouter").appendChild(button);
    button.onclick = function(){
        document.getElementById("nom 1").innerHTML = ajouteNom.value;
        document.getElementById("date 1").innerHTML = ajouteDate.value;
        
        
    }

    }
    