function aumentar() {
    let atual = document.getElementById("contador").innerHTML;
    let result = ++ atual

    document.getElementById("contador").innerHTML = result;
}

function diminuir() {
    let atual = document.getElementById("contador").innerHTML;
    let result = atual - 1

    document.getElementById("contador").innerHTML = result;
}

function resetar() {
    let atual = document.getElementById("contador").innerHTML;
    let result = atual * 0;

    document.getElementById("contador").innerHTML = result;
}