document.getElementById("registro").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var suscripcion = document.getElementById("suscripcion").value;
    var messageElement = document.getElementById("resultado");
    if (name && email && suscripcion) {
        messageElement.textContent = `Gracias por participar,  ${name}! Has sido agendado.`;
    } 
    else { 
        messageElement.textContent = `Por favor, completa todos los campos.`;
    }
});
function mostrarMenu() {
    var x = document.getElementById("miNav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}
