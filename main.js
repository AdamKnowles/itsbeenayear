let htmlContainer = document.querySelector('#container');

let array = [];

const allSections = () => {
    return `
    <div id='list'></div>
    <div id ='form'></div>`
}

htmlContainer.innerHTML = allSections();

const formHtml = () => {
    return `
    <input type="text" id="textinput" name="name" required
                minlength="4" maxlength="8" size="10">
    <input id='onlybutton'class="favorite styled"
                    type="button"
                    value="Add item">
            `
}

    let formContainer = document.querySelector('#form');
    formContainer.innerHTML = formHtml();

let list = document.querySelector('#list');
const loadListItems = () => {
     array.forEach((item, index) => {
        let number = index + 1;
        let htmlString = `<ul id='list-${number}' type='1'><li>${item}
        <input id='deletebutton-${number}'class="deletebutton"
        type="button"
        value="delete item"></div></li></ul>`
        list.innerHTML += htmlString;
        });
}

const addItemToList = () => {
    let textinput = document.querySelector('#textinput');
    let button = document.querySelector('#onlybutton');
    button.addEventListener('click', () => {
        let valueOfInput = textinput.value
         array.push(valueOfInput);
         list.innerHTML = '';
         loadListItems();
         textinput.value = '';
    });
}

const deleteItemFromList = () => {
    let deleteButton = document.querySelector('#list');
    deleteButton.addEventListener('click', event => {
        if(event.target.id.startsWith('deletebutton-')) {
           let id = event.target.id.split('deletebutton-')[1]
           document.querySelector(`#list-${id}`).remove();
           array.splice(parseInt(id)-1, 1);
           list.innerHTML = '';
           loadListItems();
        } 
    })  
}

loadListItems();
addItemToList();
deleteItemFromList();
 




