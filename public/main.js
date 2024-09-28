const note = document.getElementById('note');
const dailyNote = document.getElementById('savedNote');
const saveButton = document.getElementById('saveNote');
const deleteButton = document.getElementById('deleteData');

const modifyButton = document.getElementById('mod-user');
const deleteUserbtn = document.getElementById('deleteName');
const userName = document.getElementById('userName')

function askForName() {
  let storedName = localStorage.getItem('userName');

  if (!storedName) {
    storedName = prompt('Por favor, ingresa tu nombre:');

    if (storedName) {
      localStorage.setItem('userName', storedName);
    }
  }

  showUser();
  showNote();
}

function showUser() {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    userName.textContent = `Hola, ${storedName}!`;
  }
}

function showNote(){
  const storedNote = localStorage.getItem('notita');
  if (storedNote) {
    dailyNote.textContent = `${storedNote}`;
  }
}

// BOTONES
saveButton.addEventListener('click', function () {
  localStorage.setItem('notita', note.value);
  showNote();
});

deleteButton.addEventListener('click', function () {
  localStorage.clear();
})

modifyButton.addEventListener('click', function () {
  storedName = prompt('Por favor, ingresa tu nombre:');

  if (storedName) {
    localStorage.setItem('userName', storedName);
    userName.textContent = `Hola, ${storedName}!`;
  }
});

deleteUserbtn.addEventListener('click', function () {
  localStorage.removeItem('userName');
  userName.textContent = 'Ravenly';
})

askForName();
showNote();