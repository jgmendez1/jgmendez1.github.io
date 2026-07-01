const pixton = document.getElementById("pixton");

pixton.addEventListener("click", function() {
abrirNuevaVentana("https://www.pixton.com/es/");
});
function abrirNuevaVentana(url) {
window.open(url, "_blank");
}
function mostrarMenu() {
    var x = document.getElementById("miNav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}
