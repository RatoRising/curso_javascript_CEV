let btnContar = document.querySelector('.botao');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {
    for (let i = 10; i > 0 ; i--) {
        resultado.innerHTML += `> ${[i]} `
    }
    resultado.innerHTML += ` \u{1F3C1}`
}






/* SOLUÇÃO DO PROFESSOR
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    let cont = 10
    while (cont >= 1) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont -- // Corresponde a cont = cont - 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}
*/