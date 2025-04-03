const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPassword = document.getElementById("password-one");
let secondPassword = document.getElementById("password-two");

let passwordOne = ""
let passwordTwo = ""

function generatePasswords(){

    passwordOne = ""
    passwordTwo = ""

    for (let i  = 0; i < 15; i++){
        let randomCharPasswordOne = characters[Math.floor(Math.random() * characters.length)]
        passwordOne += randomCharPasswordOne

        let randomCharPasswordTwo = characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += randomCharPasswordTwo
    }

    firstPassword.textContent = passwordOne
    secondPassword.textContent = passwordTwo

    console.log(passwordOne)
    console.log(passwordTwo)
}

function copyPasswordOne(){
    navigator.clipboard.writeText(passwordOne);
  
    
    alert("Copied the text: " + passwordOne);
}

function copyPasswordTwo(){
    navigator.clipboard.writeText(passwordTwo);
  
    
    alert("Copied the text: " + passwordTwo);
}



