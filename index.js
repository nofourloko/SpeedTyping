const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let haslo = ""
let haslo2 = "" 
let pole = document.getElementById("wypisanie")
let pole2 = document.getElementById("wypisanie_2")
function losowe_haslo(){
    if(haslo === "" && haslo2 === ""){
    for(let i = 0; i <= 14; i++){
        let liczba = characters[Math.floor(Math.random() * characters.length)]
        haslo += liczba
    }
    pole.textContent = haslo
    for(let i = 0; i <= 14; i++){
        let liczba2 = characters[Math.floor(Math.random() * characters.length)]
        haslo2 += liczba2
    }
    pole2.textContent = haslo2
    }
    haslo = ""
    haslo2 = ""
}


