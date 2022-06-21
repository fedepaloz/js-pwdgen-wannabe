/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
 */



 const firstName = prompt ('nome', 'federico');

 console.log(firstName);

 const secondName = prompt ('cognome', 'palozzi');

 console.log(secondName);

 const favCol = prompt ('colore', 'viola');

 console.log(favCol);

 const password = firstName + secondName + favCol + '21'

 console.log(password);

 const result = document.getElementById('codice');

  result.innerText = password;