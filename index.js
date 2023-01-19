//pre-given array of chars for the passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//assign variables to its sister element so then later I can easily add text to the page
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");

//onclick function
function generatePasswords() {
    let password1 = "";
    let password2 = ""; 
for (let i = 0; i < 15; i++) {
    let generate1 = characters[Math.floor(Math.random() * characters.length)];
    password1 += generate1;
}
    password1El.textContent = password1;
for (let i = 0; i < 15; i++) {
    let generate2 = characters[Math.floor(Math.random() * characters.length)];
    password2 += generate2;
}
    password2El.textContent = password2;    
}   
        
/*const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});
click to copy?

*/