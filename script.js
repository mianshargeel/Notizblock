let notesTitle = ['Web', 'Design', 'Logic', 'Framework','Framework'];
let notesContent = ['HTML', 'CSS', 'Javascript', 'Angular', 'React'];
let trashNotesTitle = [];
let trashNotes = [];

function renderNotes() {
  let fieldOfNotes = document.getElementById('notes-field');  
  fieldOfNotes.innerHTML = '';

  for (let i = 0; i < notesContent.length; i++) {
    fieldOfNotes.innerHTML += getNotes(i);
  }
}
function getNotes(index) {
  return `
    <div class='notes-heading'> 
    <h3>${notesTitle[index]}</h3> - 
    <p>${notesContent[index]}</p>
    <div class="x-a-btn">
    <button onclick="getNotesToTrash(${index})">X</button>
    <button onclick="getNotesToArchive(${index})">A</button> </div>
    </div>
    `;
}
function toAddNotes() {
  let titleInputRef = document.getElementById('title-input');
  let contentInputRef = document.getElementById('content-input');
  let val1 = titleInputRef.value;
  let val2 = contentInputRef.value;

  if (val1 !== '' && val2 !== '') {
    notesTitle.push(val1);
    notesContent.push(val2);
    renderNotes();
  } else {
    alert('Please enter the both Title and Content Fields');
  }

  titleInputRef.value = '';
  contentInputRef.value = '';
}

function trashNotesRender() {
  let trashFieldRef = document.getElementById('trash-field');
  trashFieldRef.innerHTML = '';

  for (let i = 0; i < trashNotes.length; i++) {
    trashFieldRef.innerHTML += addNotesToTrash(i);
  }
}

function addNotesToTrash(index) {
  return `
    <div class='notes-heading'>
      <h3>${trashNotesTitle[index]}</h3> - 
      <p>${trashNotes[index]}</p>
     <div class="x-a-btn">
      <button onclick="deleteNote(${index})">D</button>
      <button onclick="fromTrashToNote(${index})">N</button> </div>
    </div>
    `;
}

function getNotesToTrash(index) {
  let trashedTitle = notesTitle.splice(index, 1);
  let trashedNotes = notesContent.splice(index, 1);
  
  trashNotesTitle.push(trashedTitle);
  trashNotes.push(trashedNotes);
  renderNotes();
  trashNotesRender();
}

function deleteNote(index) {
  trashNotes.splice(index, 1);
  trashNotesTitle.splice(index, 1);
  renderNotes();
  trashNotesRender();
}

function fromTrashToNote(index) {
  let titleOfNotes = trashNotesTitle.splice(index, 1);
  let contentOfNotes = trashNotes.splice(index, 1);
  
  notesTitle.push(titleOfNotes);
  notesContent.push(contentOfNotes);
  
  renderNotes();
  trashNotesRender();
  archiveNotesRender();
}