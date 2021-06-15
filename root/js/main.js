var smooth = document.getElementsByClassName('smooth');
var heroText = document.getElementsByClassName('hero-text-only')[0];
var heroSub = document.getElementsByClassName('hero-sub-text')[0];
var content = document.getElementsByClassName('content')[0];

// Buttons Objects + Router
var routeHome = document.getElementById('goToHome');
routeHome.addEventListener('click', renderHome);

var routeWebDev = document.getElementById('goToWebDev');
routeWebDev.addEventListener('click', renderWebDev);


function fade() {
  for (let element of smooth) {
    element.style.opacity = 0;
  }
}

function reveal() {
  for (let element of smooth) {
    element.style.opacity = 1;
  }
}

// Render View Functions
function renderHome() {
  resetActive();
  fade();

  setTimeout(function() {
    routeHome.classList.add("active");
    heroText.innerHTML = "Non Scholae, Sed Vitae Discimus.";
    heroSub.innerHTML = "- Seneca";
    content.innerHTML = welcome();
    reveal();
  }, 500);

}

function renderWebDev() {
  resetActive();
  routeWebDev.classList.add("active");

  fade();

  setTimeout(function() {
    heroText.innerHTML = "Software";
    heroSub.innerHTML = "";
    content.innerHTML = "";

    let darkbg = false;
    for (let i in posts) {
      content.innerHTML += componentPost(posts[i], darkbg);
      darkbg = !darkbg;
    }

    reveal();
  }, 500);
}


// Aux Functions
function resetActive() {
  var routes = document.getElementsByClassName("route");
  for (let route of routes) {
    route.classList.remove("active");
  }
}



// Example data (to be exported to it's own json file)
var posts = [{
    title: "Título do programa",
    desc: `
    <p>Aplicação cliente para a Star Wars API. Você pode pegar as informações de qualquer personagem procurando pelo nome.</p>
    <br>
    <ul class="bx-ul">
      <li><i class="bx bx-right-arrow"></i>Roda diretamente no Browser</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza o fetch()</li>
      <li><i class="bx bx-right-arrow"></i>Escalonamento automático com a tela</li>
      <li><i class="bx bx-right-arrow"></i>Tradutor Básico</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza HTML5, JS, CSS3</li>
      <li><i class="bx bx-right-arrow"></i><a href="#">Github</a></li>
      <li><i class="bx bx-right-arrow"></i>Teste a aplicação rodando <a href="#">AQUI</a></li>
    </ul>`,
    image: `https://picsum.photos/300`
  },
  {
    title: "Título do programa 2",
    desc: `
    <p>Aplicação cliente para a Star Wars API. Você pode pegar as informações de qualquer personagem procurando pelo nome.</p>
    <br>
    <ul class="bx-ul">
      <li><i class="bx bx-right-arrow"></i>Roda diretamente no Browser</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza o fetch()</li>
      <li><i class="bx bx-right-arrow"></i>Escalonamento automático com a tela</li>
      <li><i class="bx bx-right-arrow"></i>Tradutor Básico</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza HTML5, JS, CSS3</li>
      <li><i class="bx bx-right-arrow"></i><a href="#">Github</a></li>
      <li><i class="bx bx-right-arrow"></i>Teste a aplicação rodando <a href="#">AQUI</a></li>
    </ul>`,
    image: `https://picsum.photos/300`
  },
  {
    title: "Título do programa 3",
    desc: `
    <p>Aplicação cliente para a Star Wars API. Você pode pegar as informações de qualquer personagem procurando pelo nome.</p>
    <br>
    <ul class="bx-ul">
      <li><i class="bx bx-right-arrow"></i>Roda diretamente no Browser</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza o fetch()</li>
      <li><i class="bx bx-right-arrow"></i>Escalonamento automático com a tela</li>
      <li><i class="bx bx-right-arrow"></i>Tradutor Básico</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza HTML5, JS, CSS3</li>
      <li><i class="bx bx-right-arrow"></i><a href="#">Github</a></li>
      <li><i class="bx bx-right-arrow"></i>Teste a aplicação rodando <a href="#">AQUI</a></li>
    </ul>`,
    image: `https://picsum.photos/300`
  },
  {
    title: "Título do programa 4",
    desc: `
    <p>Aplicação cliente para a Star Wars API. Você pode pegar as informações de qualquer personagem procurando pelo nome.</p>
    <br>
    <ul class="bx-ul">
      <li><i class="bx bx-right-arrow"></i>Roda diretamente no Browser</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza o fetch()</li>
      <li><i class="bx bx-right-arrow"></i>Escalonamento automático com a tela</li>
      <li><i class="bx bx-right-arrow"></i>Tradutor Básico</li>
      <li><i class="bx bx-right-arrow"></i>Utiliza HTML5, JS, CSS3</li>
      <li><i class="bx bx-right-arrow"></i><a href="#">Github</a></li>
      <li><i class="bx bx-right-arrow"></i>Teste a aplicação rodando <a href="#">AQUI</a></li>
    </ul>`,
    image: `https://picsum.photos/300`
  }
];

// Component: POST
// Generates POST from given content
function componentPost(content, darkbg) {
  var model = {
    html: `
        <div class="row px-2 ${ darkbg ? "bg-sec" : "" }">
          <div class="col">
            <div class="content-title">${ content.title }</div>
            <div class="content-text">
              ${ content.desc }
            </div>
          </div>
          <div class="col center">
            <img class="thumb" src="${ content.image }" alt="">
          </div>
        </div>
    `
  };

  return model.html;
}


// Component: WELCOME
// Generates my WELCOME Message
function welcome() {
  var model = {
    html: `
        <div class="row px-2">
          <div class="col">
            <div class="content-title">Bem vindo(a)!</div>
            <div class="content-text">
              <p>Olá! Eu sou o Rahul!</p>
              <p>Bem vindo(a) ao meu laboratório!<p>
              <p>Utilize a barra de navegação para acessar as seções do site!</p>
            </div>
          </div>
          <div class="col center">
            <img class="thumb" src="https://picsum.photos/300" alt="">
          </div>
        </div>
    `
  };

  return model.html;
}


// When the window is loaded
window.onload = function() {
  content.innerHTML = welcome();
}

// Scrollbar automation
var navigation = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", (event) => {
  if (this.scrollY > 50) {
    navigation.classList.add('navbar--darkbg');
  } else {
    navigation.classList.remove('navbar--darkbg');
  }
});


// Navbar automation
var navLinks = document.getElementsByClassName("navbar--links")[0];
var navButton = document.getElementsByClassName("navbar--btn")[0];
var navBars = document.getElementsByClassName("navbar--btn--bar");

navButton.addEventListener('click', toggleNav);

function toggleNav() {
  navLinks.classList.toggle('visible');

  for (let bar of navBars) {
    bar.classList.toggle('close');
  }

}
