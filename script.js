const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"), 
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

//store all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {  //get 6 random characters from the array
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.textContent += ` ${randomChar}`;  //put the 6 random characters in captcha
    }
};

reloadBtn.addEventListener("click", () => {
    captcha.textContent = "";
    getCaptcha();
});

checkBtn.addEventListener("click", e => {
    e.preventDefault();  //prevent buttong from doing its default behavior
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split('').join(' ');
    // the above is to add space to answer because space has been added while generating captcha
    if (inputVal == captcha.textContent) {
        statusTxt.style.color = "#4db2ec";
        statusTxt.textContent = "Nice! You don't appear to be a robot.";
        setTimeout(() => {  //remove user-entered value and reset captcha after 4s
            statusTxt.style.display = "none";
            inputField.value = "";
            captcha.textContent = "";
            getCaptcha(); //call getCaptcha function
        }, 4000); 
    } else {
        statusTxt.style.color = "#ff0000"
        statusTxt.textContent = "Captcha not matched. Please try again.";
    }
})
