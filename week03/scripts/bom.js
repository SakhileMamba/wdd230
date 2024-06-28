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

function setChapterList() {
    window.localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(window.localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = "";
        input.focus();

    } else {
        alert("Input scripture!");
    }
})

