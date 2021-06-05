
var adder = document.getElementById('addContent');
var content = document.getElementsByClassName('content')[0];
adder.addEventListener('click', addContent);

function addContent() {
  content.innerHTML = componentPost(post);
}


// Example data:
var post = {
  title: "Título do programa",
  desc: `
  <p>Aplicação cliente para a Star Wars API. Você pode pegar as informações de qualquer personagem procurando pelo nome.</p>
  <br>
  <ul>
    <li>Roda diretamente no Browser</li>
    <li>Utiliza o fetch()</li>
    <li>Escalonamento automático com a tela</li>
    <li>Tradutor Básico</li>
    <li>Utiliza HTML5, JS, CSS3</li>
    <li><a href="#">Github</a></li>
    <li>Teste a aplicação rodando <a href="#">AQUI</a></li>
  </ul>`,
  image: `https://picsum.photos/300`
}

// Component: POST
// Generates POST from given content
function componentPost(content){

  var model = {
    html : `
        <div class="row px-2">
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
