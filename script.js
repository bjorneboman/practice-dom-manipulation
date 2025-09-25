const form = document.querySelector('form');
const userList = document.getElementById('userList');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;

    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(`${name}: ${email}`))
    userList.appendChild(listItem)

    nameInput.value = ""
    emailInput.value = ""
    
})