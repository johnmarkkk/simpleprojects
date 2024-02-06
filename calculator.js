let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let output = '';
let specialChars = ["%", "*", "/", "-", "+", "="];

buttons.forEach(button => {
    button.addEventListener('click', e => calculate(e.target.dataset.value))
})


document.addEventListener('keydown', e => {
    const keyValue = e.key;
    if (keyValue === "Enter") calculate("=");
    else if (keyValue === "Escape") calculate("AC");
    else if (keyValue === "Backspace") calculate("DEL");
    else if (!isNaN(keyValue) || specialChars.includes(keyValue)) calculate(keyValue);
});

const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        output = output.slice(0, -1);
    }
    else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
    
    }
  

