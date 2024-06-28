const input = document.getElementById('favchap');
const list = document.querySelector('#list');
const button = document.querySelector('button');

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    listItem.textContent = item;
    deleteButton.textContent = "❌";
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    deleteButton.addEventListener('click', () => {
        listItem.remove()
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

functi