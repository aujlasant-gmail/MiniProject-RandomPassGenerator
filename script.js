let input = document.querySelector(".display input");
let btn = document.querySelector("button");
let copyIcon = document.querySelector(".display i");

const generatePassword = () => {
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$_~!%&*()-+?";
  let pass = "";

  for (let i = 0; i <= 10; i++) {
    let char = Math.floor(Math.random() * (str.length + 1));
    pass = pass + str.charAt(char);
  }
  input.value = pass;
};

const copyPassword = () => {
  input.select();
  navigator.clipboard.writeText(input.value);
};

btn.addEventListener("click", (e) => {
  generatePassword(e.target);
});

copyIcon.addEventListener("click", (e) => {
  copyPassword(e.target);
});
