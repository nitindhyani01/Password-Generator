const passbox = document.getElementById("pass");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

const allchar = uppercase + lowercase + number + symbol;

function generatepass() {
    let passwrd = "";
    passwrd += uppercase[Math.floor(Math.random() * uppercase.length)];
    passwrd += lowercase[Math.floor(Math.random() * lowercase.length)];
    passwrd += number[Math.floor(Math.random() * number.length)];
    passwrd += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > passwrd.length) {
        passwrd += symbol[Math.floor(Math.random() * symbol.length)]
    }
    passbox.value = passwrd;
}
function copypass(){
    passbox.select();
    document.execCommand("copy");
}