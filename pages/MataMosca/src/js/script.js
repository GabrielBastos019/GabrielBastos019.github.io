var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var velocidade = 2000

function redicionamentoDeTela() {
    altura = window.innerHeight
    largura = window.innerWidth
}
redicionamentoDeTela()

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === "facil") {
    velocidade = 2000
} else if (nivel === "normal") {
    velocidade = 1500
} else if (nivel === "dificil") {
    velocidade = 1000
} else if (nivel) {
    velocidade = 750
}


var cronometro = setInterval(
    function () {
        tempo -= 1
        if (tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criarMosca)
            window.location.href = "vitoria.html"
        } else {
            document.getElementById("cronometro").innerHTML = tempo
        }
    }
    , 1000)
function posicaoRandonica() {
    //remover oo mosquito anterior (caso exista)
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if (vidas > 3) {
            window.location.href = "Game_Over.html"
        } else {
            document.getElementById("v" + vidas).src = "src/img/coracao_vazio.png"
            vidas++

        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 85
    var posicaoY = Math.floor(Math.random() * altura) - 85
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando elemento html
    var mosquito = document.createElement("img")
    mosquito.src = "src/img/mosca.png"
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosquito)
}
//Criando tamanhos aleatorios das moscas
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    if (classe == 0) {
        return "mosquito1 "
    } else if (classe == 1) {
        return "mosquito2 "
    } else if (classe == 2) {
        return "mosquito3 "
    }
}
//Criando lado aleatorios em que as moscas irão aparecer
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    if (classe == 0) {
        return "ladoA"
    } else {
        return "ladoB"
    }
}
var criarMosca = setInterval(
    function () {
        posicaoRandonica()
    }
    , velocidade)
