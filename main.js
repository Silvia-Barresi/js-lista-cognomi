// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova


var surnameList = ["Piton", "Silente", "McGranitt", "Umbridge", "Moody", "Vitious", "Cooman"];

var userSurname = prompt("Enter your surname");

surnameList.push(userSurname);


var i=0;
while(i < surnameList.length){
  surnameList.sort();
  console.log(surnameList[i])
  i++;
}

var position = surnameList.indexOf(userSurname)+1;

document.getElementById('surname').innerHTML= surnameList;
document.getElementById('position').innerHTML="You're number  " + position;
