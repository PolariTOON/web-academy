 function ilike(champ){
    return (champ.checked ? "j'aime" : "je n'aime pas");
}

function generer_reponse(form){
    var phrase=
        "<p>Je m'appelle " + (form["nom"].value||"nom par défaut") + ".</p><p> j'ai " + (form["age"].value||0) + " ans.</p><p> " + ilike(form["banane"]) + " les bananes, " + ilike(form["pomme"]) + " les pommes, " + ilike(form["orange"]) + " les oranges</p><p> " + (form["permis"].value === "oui" ? "J'ai" : "Je n'ai pas") + " le permis.</p><p> mon mot de passe fait " + form["password"].value.length + " caractères et le token anti-csrf vaut " + form["token"].value +".</p>";
    document.getElementById("reponse").innerHTML = phrase;
}

var myform = document.forms["myform"];

myform["generate"].addEventListener("click",function(){generer_reponse(myform)});
