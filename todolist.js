let input = document.querySelector('#todoName');
let inputDate = document.querySelector('#todoDate');
let button = document.querySelector('button');
let div = document.querySelector('.second-part');
let storedArray = JSON.parse(localStorage.getItem('array')) || [];

function getValue(){
    let value = input.value;
    let dateValue = inputDate.value;

    if(value !== "" && dateValue !== ""){
        input.value = "";
        inputDate.value = "";

        storedArray.push({ name: value, date: dateValue });
        createNew(value, dateValue);
        localStorage.setItem('array', JSON.stringify(storedArray));
    }
}

function createNew(name, date){
    let division = document.createElement('div');
    div.append(division);

    division.classList.add('love');

    let paragraph = document.createElement('p');
    paragraph.innerText = name;
    division.append(paragraph);

    let dateParagraph = document.createElement('p');
    dateParagraph.innerText = date;
    division.append(dateParagraph);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    division.append(deleteButton);

    deleteButton.onclick = function() {
        deleteDiv(division);
        storedArray = storedArray.filter(item => item.name !== name);
        localStorage.setItem('array', JSON.stringify(storedArray));
    }
}

function deleteDiv(division){
    division.remove();
}

storedArray.forEach(item => createNew(item.name, item.date));

button.addEventListener('click', getValue);