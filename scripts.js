const passwordBox = document.getElementById('password');
const lenght = 12;

const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+{}>?";

const btn = document.getElementsByClassName('.btnGenerate')

console.log(btn)

const allChars = uppercase + lowercase +  number + symbols;

function createPassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
};



function copyPassword(){
    passwordBox.select();
    document.execCommand('copy')
}