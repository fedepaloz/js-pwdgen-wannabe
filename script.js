/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
 */


const firstName = prompt('quale è il tuo nome?');

const secondName = prompt('quale è il tuo cognome?');

const favColor = prompt('il tuo colore preferito');

const codice = firstName + secondName + favColor



resultText.innerText = codice;