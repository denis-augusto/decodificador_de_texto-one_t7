
let resultadoCodificado = document.querySelector('.resultato__codificado__texto');

function criptografar(){
  let regExp = /[aeiou]/gm;
  let msgInicial = document.querySelector('#txtArea').value.replace(regExp, (mensagem) => {
    switch (mensagem) {
      case 'e':
        return 'enter';
        break;
      case 'i':
        return 'imes';
        break;
      case 'a':
        return 'ai';
        break;
      case 'o':
        return 'ober';
        break;
      case 'u':
        return 'ufat';
        break;
      default:
        return mensagem;
    }
  });

  resultadoCodificado.innerHTML = msgInicial;

  exibeMSg();
}

function descriptografar(){
  let regExp = /enter|imes|ai|ober|ufat/gm;
  let msgInicial = document.querySelector('#txtArea').value.replace(regExp, (mensagem) => {
    switch (mensagem) {
      case 'enter':
        return 'e';
        break;
      case 'imes':
        return 'i';
        break;
      case 'ai':
        return 'a';
        break;
      case 'ober':
        return 'o';
        break;
      case 'ufat':
        return 'u';
        break;
      default:
        return mensagem;
    }
  });

  resultadoCodificado.innerHTML = msgInicial;

  exibeMSg();
}


function copiar(){
  navigator.clipboard.writeText(resultadoCodificado.innerHTML)
}

function exibeMSg(){
  document.querySelector('.resultado__vazio').setAttribute('hidden', '');
  document.querySelector('.resultado__codificado').removeAttribute('hidden');
}


// expandir textarea
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}