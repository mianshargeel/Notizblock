//i have created these function to connent with localstorage but ist not working

function init() { //loading in Body-tag at onloada-function
  // Check if localStorage has data
  let title = localStorage.getItem('notesTitle');
  let content = localStorage.getItem('notesContent');
  
  // If localStorage is empty, use default arrays
  if (!title || !content) {
    setToLocalStorage(); // Save the default arrays to localStorage
  } else {
    // If localStorage has data, load it into the app
    notesTitle = JSON.parse(title);
    notesContent = JSON.parse(content);
  }

  // Render notes and other UI components
  renderNotes();
  trashNotesRender();
  archiveNotesRender();
}

function getFromLocalStorage() { //getting value of all arrays of Notizblock
  let title = localStorage.getItem('notesTitle');
  let content = localStorage.getItem('notesContent');
  let trashTitle = localStorage.getItem('trashNotesTitle');
  let trashContent = localStorage.getItem('trashNotes');
  let archiveTitle = localStorage.getItem('archiveNotesTitle');
  let archiveContent = localStorage.getItem('archiveNotes'); 

  if (title && content) {
    notesTitle = JSON.parse(title);
    notesContent = JSON.parse(content);
  } else {
    notesTitle = []; //if not found Initialize as empty 
    notesContent = [];
  }

  if (trashTitle && trashContent) {
    trashNotesTitle = JSON.parse(trashTitle);
    trashNotes = JSON.parse(trashContent);
  } else {
    trashNotesTitle = [];
    trashNotes = [];
  }

  if (archiveTitle && archiveContent) {
    archiveNotesTitle = JSON.parse(archiveTitle);
    archiveNotes = JSON.parse(archiveContent);
  } else {
    archiveNotesTitle = [];
    archiveNotes = [];
  }
}

function setToLocalStorage() { //seting values of all arrays in local storage
  //  console.log('Saving to localStorage:', { notesTitle, notesContent, trashNotesTitle, trashNotes, archiveNotesTitle, archiveNotes });
  localStorage.setItem('notesTitle', JSON.stringify(notesTitle));
  localStorage.setItem('notesContent', JSON.stringify(notesContent));
  localStorage.setItem('trashNotesTitle', JSON.stringify(trashNotesTitle)); 
  localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
  localStorage.setItem('archiveNotesTitle', JSON.stringify(archiveNotesTitle)); 
  localStorage.setItem('archiveNotes', JSON.stringify(archiveNotes)); 
}
