// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo) {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    } else {
        document.getElementById("error").textContent = "Por favor, ingresa un nombre válido.";
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }
    let amigo1 = amigos[Math.floor(Math.random() * amigos.length)];
    let amigo2 = amigos[Math.floor(Math.random() * amigos.length)];
    while (amigo1 === amigo2) {
        amigo2 = amigos[Math.floor(Math.random() * amigos.length)];
    }
    document.getElementById("resultado").textContent = "El amigo secreto de " + amigo1 + " es " + amigo2;
}
