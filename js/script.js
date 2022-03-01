/*
ESERCIZIO PALINDROMI
*/

// let title = document.querySelector('#title')

// let inputWord = prompt(`dammi una parola`);

// let invert = invertWord(inputWord)

// if(reversedWord == inputWord){
//     title.innerHTML=`La parola ${inputWord} è palindroma! Ecco il risultato ${reversedWord}`;
// } else{
//     title.innerHTML=`La parola ${inputWord} non è palindroma! Ecco il risultato ${reversedWord}`;
// }

// function invertWord(inputWord){    
//     let splitWord = inputWord.split('')
//     let revWord = splitWord.reverse()
//     reversedWord = revWord.join('')
//     return reversedWord
// }


/******************************************************************************************
ESERCIZIO PARI E DISPARI
*/
let title = document.querySelector('#title')
let pari = document.querySelector('#even')
let dispari = document.querySelector('#odd')



pari.classList.add('show')
dispari.classList.add('show')
pari.classList.remove('hidden')
dispari.classList.remove('hidden')

let valido = true

pari.addEventListener('click' , function(){
    let userLaunch = parseInt(prompt('Inserisci un numero da 1 a 5'))
    if(userLaunch < 1){
        alert('Il tiro non è valido')
        valido = false;
    } else if(userLaunch > 5){
        alert('Il tiro non è valido')
        valido = false;
    }else{
        let randomLaunch = Math.floor(Math.random()*5)+1;
        if (valido == true){
            console.log(randomLaunch)
            console.log(userLaunch)
        }
        if ((randomLaunch + userLaunch) % 2 == 0){
            title.innerHTML=`Complimenti hai vinto <br> <br> Il tuo numero ${userLaunch} <br> Il mio numero ${randomLaunch} <br> Avevi scelto "Pari"`
        } else{
            title.innerHTML=`Ho vinto io!<br> <br>Il tuo numero ${userLaunch} <br> Il mio numero ${randomLaunch} <br> Avevi scelto "Pari"`
        }
    }
})


dispari.addEventListener('click' , function(){
    let userLaunch = parseInt(prompt('Inserisci un numero da 1 a 5'))
    if(userLaunch < 1){
        alert('Il tiro non è valido')
        valido = false;
    } else if(userLaunch > 5){
        alert('Il tiro non è valido')
        valido = false;
    }else{
        let randomLaunch = Math.floor(Math.random()*5)+1;
        if (valido == true){
            console.log(randomLaunch)
            console.log(userLaunch)
        }
        if ((randomLaunch + userLaunch) % 2 != 0){
            title.innerHTML=`Complimenti hai vinto<br> <br>Il tuo numero ${userLaunch} <br> Il mio numero ${randomLaunch} <br> Avevi scelto "Dispari"`
        } else{
            title.innerHTML=`Ho vinto io!<br> <br>Il tuo numero ${userLaunch} <br> Il mio numero ${randomLaunch} <br> Avevi scelto "Dispari"`
        }
    }
})














