var posicaoSuperior = 250,
    posicaoEsquerda = 350,
    topAvatar,
    leftAvatar
    anguloAvatar = 0;
    
    const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 100,
    posicaoEsquerdaFinal = 400,
    anguloInicial = 0,
    anguloFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel");

    imgAvatar.style.position = "absolute";
    imgAvatar.style.top = posicaoSuperior + "px";
    imgAvatar.style.left = posicaoEsquerda + "px";
    imgAvatar.style.transform = "rotate("+ anguloAvatar +")";


    function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));
    }


    function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
    }


    function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value);
        if (posicaoEsquerda < posicaoEsquerdaInicial) {
            posicaoEsquerda = posicaoEsquerdaInicial;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
    }


    function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar < posicaoEsquerdaFinal) {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerda) {
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para direita. Tente outro botão.");
    }
    console.log("Posição do avatar à direita depois: ", imgAvatar.style.left);
    }


    function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar > posicaoSuperiorInicial) {
        posicaoSuperior -= parseInt(txtPixel.value);
        if (posicaoSuperior < posicaoSuperiorInicial) {
            posicaoSuperior = posicaoSuperiorInicial;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
    }


    function moverParaBaixo() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoSuperiorFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (posicaoSuperior > posicaoSuperiorFinal) {
            posicaoSuperior = posicaoSuperiorFinal;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição inferior do avatar depois: ", imgAvatar.style.top);
    }


    function girarHorario() {
    console.clear();
    console.log ("ângulo do avatar antes:", anguloAvatar + "deg");
    if (topAvatar < anguloFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (anguloInicial > posicaoSuperiorFinal) {
        anguloAvatar = anguloFinalFinal;
        }
        imgAvatar.style.transform = "rotate("+ anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível girar. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
    }


    function girarAntihorario() {
        console.clear();
        if (anguloAvatar < anguloInicial) {
        anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloInicial) {
        anguloAvatar = anguloInicial;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
        } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
        }
    }    

    function slideImagem(){
        imgAvatar.style.transition = "margin-left 1s ease-in-out";
        imgAvatar.style.marginLeft = "100px";
    }

    function slideImagemDireita(){

        imgAvatar.style.transition = "margin-left 1s ease-in-out";
        imgAvatar.style.marginLeft = "-60px";
    }

    function aleatorio() {
        var img = document.getElementById("imgAvatar");
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var randomX = Math.floor(Math.random() * (screenWidth - img.width));
        var randomY = Math.floor(Math.random() * (screenHeight - img.height));
        img.style.position = "absolute";
        img.style.left = randomX + "px";
        img.style.top = randomY + "px";
    }
      
    function direcao(){
        imgAvatar.style.transform = "scaleX(-1)"
    }

    function direcaoDireita(){
        imgAvatar.style.transform = "scaleX(1)"
    }
      
    function diminuir(){
        var tamanhoAtual = imgAvatar.clientWidth;
        var tamanhoMinimo = 100;
        var novoTamanho = tamanhoAtual * 0.8;
        if(novoTamanho >= tamanhoMinimo){
            imgAvatar.style.width = novoTamanho + "px";
        }else{
            alert("A imagem atiguiu o tamanho minimo")
        }
    }

    function aumentar(){
        var tamanhoAtual = imgAvatar.clientWidth;
        var novoTamanho = tamanhoAtual * 1.2;
        var tamanhoMaximo = 500;
        if(novoTamanho <= tamanhoMaximo){
            imgAvatar.style.width = novoTamanho + "px";
        }else{
            alert("A imagem atiguiu o tamanho maximo")
        }
    }