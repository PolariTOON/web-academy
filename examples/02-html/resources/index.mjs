const likesField = function likesField(checkbox) {
    return checkbox.checked ? "j'aime" : "je n'aime pas";
};
const hasField = function hasField(radioButtons) {
    return radioButtons.value === "yes" ? "j'ai" : "je n'ai pas";
};
const escapeField = function escapeField(textarea) {
    return textarea.value.replace(meta, ($0) => entities[$0]);
};
const {my_form} = document.forms;
const {name, age, biography, banana, apple, orange, driver_license, password, token, result} = my_form;
const meta = /\r\n|\r|\n|&|<|>/gu;
const entities = {
    "\n": "<br/>",
    "\r": "<br/>",
    "\r\n": "<br/>",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
};
my_form.querySelector("button[type=\"button\"]").addEventListener("click", () => {
    result.innerHTML = `\
Je suis ${name.value || "anonyme"} et j'ai ${age.value || "arrêté de compter les"} ans.\
<br/>\
Voici ma biographie :\
<br/>\
${escapeField(biography)}\
<br/>\
Sachez que ${likesField(banana)} les bananes, que ${likesField(apple)} les pommes et que ${likesField(orange)} les oranges.\
<br/>\
Ah, et puis ${hasField(driver_license)} le permis.\
<br/>\
Mon mot de passe fait ${password.value.length} caractères de long et le token anti-CSRF vaut ${token.value}.\
`;
});
