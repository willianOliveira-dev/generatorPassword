function generatorPassword() {
  let pass = [];

  pass.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  pass.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  pass.push(numbers[Math.floor(Math.random() * numbers.length)]);
  pass.push(symbols[Math.floor(Math.random() * symbols.length)]);

  for (let i = 4, n = CHARSET.length; i < sliderElement.value; i++) {
    pass.push(CHARSET[Math.floor(Math.random() * n)]);
  }

  containerPasswordElement.classList.remove("hide");

  newPassword = shuffle(pass).join("");
  passwordElement.textContent = newPassword;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], [array[j]]] = [array[j], array[i]];
  }
  return array;
}

function copyPassword() {
  alert("Senha Copiada!");
  navigator.clipboard.writeText(newPassword);
}

const uppercase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers = [..."0123456789"];
const symbols = [...".^*?{}[]()$\\|"];

const CHARSET = [...uppercase, ...lowercase, ...numbers, ...symbols];

let containerPasswordElement = document.getElementById("container-password");
let sliderElement = document.getElementById("slider");
let sizePassword = document.getElementById("value");
let buttonElement = document.getElementById("btn");
let passwordElement = document.getElementById("password");
let newPassword = "";

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener("input", (e) => {
  sizePassword.textContent = e.target.value;
});

buttonElement.addEventListener("click", generatorPassword);
containerPasswordElement.addEventListener("click", copyPassword);
