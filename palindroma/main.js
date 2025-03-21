function isPalindrome(word) {   
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();  
    return cleanedWord === cleanedWord.split('').reverse().join('');  
}  

// Chiediamo all'utente di inserire una parola  
const userInput = prompt("Inserisci una parola:");  

// Verifichiamo se la parola è palindroma  
if (isPalindrome(userInput)) {  
    console.log(`La parola '${userInput}' è palindroma.`);  
} else {  
    console.log(`La parola '${userInput}' non è palindroma.`);  
}  