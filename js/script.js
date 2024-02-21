
// ELEMENTS
const outputEl = document.getElementById('output');
const primoParagrafo = document.querySelector('.container .primo-paragrafo');
const secondoParagrafo = document.querySelector('.container .secondo-paragrafo');
const terzoParagrafo = document.querySelector('.container .terzo-paragrafo');
const quartoParagrafo = document.querySelector('.container .quarto-paragrafo');
const titolo = document.querySelector('h1');
const titoloInput = document.querySelector('.titolo-input');
const titoloColore = document.querySelector('.titolo-colore');

// INPUT
const input1 = document.querySelector('.input1');
const selectColore = document.querySelector('.select-colore');

// BUTTONS
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');


const testoTitoloInput = 'Qui deve apparire il conteuto dell\'input';
titoloInput.innerHTML = testoTitoloInput;

console.log(outputEl);
console.log(btn1);
console.log(titolo.innerHTML);

// classi presenti nell'elemento in un elenco
console.log(primoParagrafo.classList)

// classi presenti nell'elemento in una string
console.log(primoParagrafo.className)

// aggiungo una classe concatenando la stringa delle classi
//primoParagrafo.className += ' grassetto';

// aggiungo una classe utilizzando add()
primoParagrafo.classList.add('grassetto')

// rimuovo rosso
primoParagrafo.classList.remove('rosso');

// toggle della classe (se c'è la metto se non c'è la tolgo)
primoParagrafo.classList.toggle('rosso');

// contains() restituisce un booleano in base all'esistenza di una classe
console.log(primoParagrafo.classList.contains('rosso'));

// cambio il colore del testo con style
secondoParagrafo.style.color = 'green'
// per le priprità con più parole la sintassi è con il camelCase
secondoParagrafo.style.backgroundColor = 'yellow'

// con style posso inserire più proprità
terzoParagrafo.style = 'font-size: 12px; font-weight: bold;'

// concateno un testo al testo presente in un elemento
//titolo.innerHTML += " - interazione con DOM"

// ottengo lo stesso risultato con append()
titolo.append(' - interazione con DOM')
titolo.prepend('Argometo di oggi: ')

// al click del bottone genero on console.log()

btn1.addEventListener('click',function(){
  // all'interno delle graffe li compie l'azione
  console.log('mi hai cliccato!');
})

// al click aggiungo la classe rosso
btn2.addEventListener('click', function(){
  titolo.classList.add('rosso')
})

// al click -> toggle della classe rosso
btn3.addEventListener('click',function(){
  titolo.classList.toggle('rosso')
})

btn4.addEventListener('click', function(){
  // se esiste la classe "rosso" aggiungo "sottolineato"
  if(titolo.classList.contains('rosso')){
    titolo.classList.add('sottolineato')
  }
})

btn5.addEventListener('click',function(){
  quartoParagrafo.classList.toggle('d-none')
})


btn6.addEventListener('click',function(event){
  // neurtralizzo la action del form
  event.preventDefault();
  // leggo il contenuto dell'input
  console.log(input1.value);
  titoloInput.innerHTML = input1.value;
})

btn7.addEventListener('click',function(){
  // resetto il titolo
  titoloInput.innerHTML = testoTitoloInput;
  // resetto il value dell'input
  input1.value = '';
})

// utilizzo una funzione esterna
btn8.addEventListener('click', scriviColore)

// al cambio della select stampo il colore
selectColore.addEventListener('change', scriviColore)

// la funzione può essere dichiara anche dopo il suo utilizzo
function scriviColore(){
  console.log(selectColore.value);
  titoloColore.innerHTML = 'Il mio colore preferito è: ' + selectColore.value;
}

let contatore = 0;
btn9.addEventListener('click',function(){
  //contatore = contatore + 1;
  //contatore += 1;
  btn9.innerHTML = contatore++;
})