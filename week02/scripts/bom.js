const input = document.getElementById('favchap');
const list = document.querySelector('#list');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (input.value != "") {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.textContent = input.value;
        deleteButton.textContent = "❌";
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        deleteButton.addEventListener('click', () =>
            listItem.remove()
        );
        input.focus();
        input.value = "";
    } else {
        alert("Input scripture!");  
    }
})
