//template for Archive
let archiveNotesTitle = [];
let archiveNotes = [];

function archiveNotesRender() {
  let archiveFieldRef = document.getElementById('archiv-field');
  archiveFieldRef.innerHTML = '';

  for (let i = 0; i < archiveNotes.length; i++) {
    archiveFieldRef.innerHTML += addNotesToArchive(i);
  }
}

function addNotesToArchive(index) {
  return `
    <div class='notes-heading'>
      <h3>${archiveNotesTitle[index]}</h3> - 
      <p>${archiveNotes[index]}</p>
      <div class="x-a-btn">
      <button onclick="getNotesForwardToTrash(${index})">X</button>
      <button onclick="fromArchiveToNote(${index})">N</button> </div>
    </div>
    `;
}

function getNotesToArchive(index) {
  let archivedTitle = notesTitle.splice(index, 1);
  let archivedNotes = notesContent.splice(index, 1);
  
  archiveNotesTitle.push(archivedTitle);
  archiveNotes.push(archivedNotes);
   setToLocalStorage();//Values of these two arrays setting in localstorage
  renderNotes();
  archiveNotesRender();
}

function getNotesForwardToTrash(index) {
  let trashedTitle = archiveNotesTitle.splice(index, 1);
  let trashedNotes = archiveNotes.splice(index, 1);
  
  trashNotesTitle.push(trashedTitle);
  trashNotes.push(trashedNotes);

  setToLocalStorage();//Values of these two arrays setting in localstorage
  renderNotes();
  trashNotesRender();
  archiveNotesRender();
}

function fromArchiveToNote(index) {
  let titleOfNotes = archiveNotesTitle.splice(index, 1);
  let contentOfNotes = archiveNotes.splice(index, 1);
  
  notesTitle.push(titleOfNotes);
  notesContent.push(contentOfNotes);
  
   setToLocalStorage();//Values of these two arrays setting in localstorage
  renderNotes();
  archiveNotesRender();
}