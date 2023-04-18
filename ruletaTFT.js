window.onload = function () {
    let asistente = document.getElementById("asistente-info");
    asistente.style.display = "none";
    let btnAsistente = document.getElementById("asistente-info");
    btnAsistente.addEventListener("click", mostrarInfo);
    //
    let info = document.getElementById("nombre-minileyenda");
    info.style.display = "none";
    let btnAtras = document.getElementById("btn-atras");
    btnAtras.addEventListener("click", esconderInfo);
    //
    let contenedorImg = document.getElementById("ctn-escondido");
    contenedorImg.style.display = "none";
    //
    let btn = document.getElementById("btnRandom");
    btn.addEventListener("click", minileyendaRandom);
}

function minileyendaRandom() {
    let a = 1;
    let b = 45;
    let numRandom = Math.round(Math.random() * (b - a) + parseInt(a));
    console.log(numRandom);
    ///// 
    let img = document.getElementById("cambio-img");
    let rutaImg = "./imagenes/minileyendas/" + numRandom + ".webp";
    img.setAttribute("src", rutaImg);
    /////
    img.style.width = "500px";
    img.style.height = "500px";
    /////
    img.classList.add("border", "border-5", "border-white");
    img.value = numRandom;
    let asistente = document.getElementById("asistente-info");
    asistente.style.display = "block";
    esconderInfo();
}

function mostrarInfo() {
    let carpeta = document.getElementById("cambio-img").value;
    const container = document.querySelector('#ctn-escondido');
    container.innerHTML="";
    //Nombres
    let es=document.getElementById("nombre-es");
    let en=document.getElementById("nombre-en");
    let neutro=document.getElementById("nombre-neutro");
    es.innerHTML="";
    en.innerHTML="";
    neutro.innerHTML="";
    switch (carpeta) {
        case 1:
            es.innerHTML= 'Espíritu de río';
            en.innerHTML= 'River Sprite';
            break;
        case 2:
            es.innerHTML= 'Alargéntea';
            en.innerHTML= 'Silverwing';
            break;
        case 3:
            es.innerHTML= 'Alatierna';
            en.innerHTML= 'Hushtail';
            break;
        case 4:
            neutro.innerHTML= 'Ao Shin';
            break;
        case 5:
            es.innerHTML= 'Astrosepio';
            en.innerHTML= 'Squink';
            break;
        case 6:
            neutro.innerHTML= 'Barón';
            break;
        case 7:
            es.innerHTML= 'Bigotitos';
            en.innerHTML= 'Whisker';
            break;
        case 8:
            es.innerHTML= 'Bolifacio';
            en.innerHTML= 'Poggles';
            break;
        case 9:
            es.innerHTML= 'Caballero';
            en.innerHTML= 'Featherknight';
            break;
        case 10:
            es.innerHTML= 'Campanolo';
            en.innerHTML= 'Bellswayer';
            break;
        case 11:
            es.innerHTML= 'Caparazudo';
            en.innerHTML= 'Paddlemar';
            break;
        case 12:
            neutro.innerHTML= 'Choncc';
            break;
        case 13:
            es.innerHTML= 'Cuernofurioso';
            en.innerHTML= 'Furyhorn';
            break;
        case 14:
            neutro.innerHTML= 'Dango';
            break;
        case 15:
            es.innerHTML= 'Escaramajo';
            en.innerHTML= 'Flutterbug';
            break;
        case 16:
            es.innerHTML= 'Escurridizo';
            en.innerHTML= 'Scuttle';
            break;
        case 17:
            es.innerHTML= 'Espíritu';
            en.innerHTML= 'Hauntling';
            break;
        case 18:
            es.innerHTML= 'Espíritu rúnico';
            en.innerHTML= 'Runespirit';
            break;
        case 19:
            es.innerHTML= 'Faucestrella';
            en.innerHTML= 'Starmaw';
            break;
        case 20:
            es.innerHTML= 'Felindo';
            en.innerHTML= 'Protector';
            break;
        case 21:
            es.innerHTML= 'Fenrugido';
            en.innerHTML= 'Fenroar';
            break;
        case 22:
            es.innerHTML= 'Florencio';
            en.innerHTML= 'Bungo';
            break;
        case 23:
            neutro.innerHTML= 'Fuwa';
            break;
        case 24:
            es.innerHTML= 'Graciela';
            en.innerHTML= 'Prancie';
            break;
        case 25:
            es.innerHTML= 'Lechuzo';
            en.innerHTML= 'Noctero';
            break;
        case 26:
            es.innerHTML= 'Limosón';
            en.innerHTML= 'Gloop';
            break;
        case 27:
            es.innerHTML= 'Lumicornio';
            en.innerHTML= 'Lightcharger';
            break;
        case 28:
            es.innerHTML= 'Magagua';
            en.innerHTML= 'Dowsie';
            break;
        case 29:
            es.innerHTML= 'Marsupiliano';
            en.innerHTML= 'Grizzle';
            break;
        case 30:
            neutro.innerHTML= 'Melisma';
            break;
        case 31:
            neutro.innerHTML= 'Nixie';
            break;
        case 32:
            es.innerHTML= 'Nébulo';
            en.innerHTML= 'Abyssia';
            break;
        case 33:
            es.innerHTML= 'Ornitorrinco';
            en.innerHTML= 'Duckbill';
            break;
        case 34:
            neutro.innerHTML= 'Ossia';
            break;
        case 35:
            es.innerHTML= 'Pirosaurio';
            en.innerHTML= 'Burno';
            break;
        case 36:
            es.innerHTML= 'Piximandra';
            en.innerHTML= 'Piximander';
            break;
        case 37:
            es.innerHTML= 'Pom Pom';
            en.innerHTML= 'Bun Bun';
            break;
        case 38:
            es.innerHTML= 'QiYi';
            en.innerHTML= 'QiQi';
            break;
        case 39:
            es.innerHTML= 'Relogelio';
            en.innerHTML= 'Tocker';
            break;
        case 40:
            es.innerHTML= 'Rocolfo';
            en.innerHTML= 'Craggle';
            break;
        case 41:
            neutro.innerHTML= 'Shisha';
            break;
        case 42:
            es.innerHTML= 'Tiburcio';
            en.innerHTML= 'Shork';
            break;
        case 43:
            es.innerHTML= 'Topo excavador';
            en.innerHTML= 'Molediver';
            break;
        case 44:
            neutro.innerHTML= 'Umbra';
            break;
        case 45:
            es.innerHTML= 'Zarpaveloz';
            en.innerHTML= 'Nimblefoot';
            break;
        default:
    }
    // Imagenes
    fetch('imagenes/' + carpeta + '/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const html = parser.parseFromString(data, 'text/html');
            const images = html.querySelectorAll('a[href$=".webp"]');

            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.href;
                img.style.width = "200px";
                container.appendChild(img);
            });
           
        });
    document.getElementById("ctn-escondido").style.display = "block";
    document.getElementById("asistente-info").style.display = "none";
    document.getElementById("nombre-minileyenda").style.display = "block";
}

function esconderInfo() {
    document.getElementById("ctn-escondido").style.display = "none";
    document.getElementById("asistente-info").style.display = "block";
    document.getElementById("nombre-minileyenda").style.display = "none";
}