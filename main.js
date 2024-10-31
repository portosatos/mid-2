let todo = localStorage.getItem('todo') ? localStorage.getItem('todo').split(',') : [];

const my_input = document.querySelector('.my_input');
const addButton = document.querySelector('.add');
const ulText = document.querySelector('.ul_text');
const clearButton = document.querySelector('.clear');

function updateList() {
    ulText.innerHTML = '';

    todo.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const delButton = document.createElement('button');
        delButton.textContent = 'Del';
        delButton.onclick = function() {
            todo.splice(index, 1);
            updateLocalStorage();
            updateList();
        };

        li.appendChild(delButton);
        ulText.appendChild(li);
    });
}

function updateLocalStorage() {
    localStorage.setItem('todo', todo.join(',')); 
}

addButton.onclick = function() {
    const item = my_input.value;

    if (item) {
        todo.push(item);
        updateLocalStorage();
        updateList();
        my_input.value = ''; 
    }
}

clearButton.onclick = function() {
    todo = [];
    updateLocalStorage();
    updateList();
}

updateList();
