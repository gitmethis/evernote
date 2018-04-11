document.addEventListener("DOMContentLoaded", function(){
  let user_root_url = "localhost:3000/api/v1/users"
  let note_root_url = "localhost:3000/api/v1/notes"


  function getUser(){
    fetch(user_root_url).then(res=> res.json())
  }

  function getNotes(){
    fetch(note_root_url).then(res => res.json())
  }


  function createNote(){
    fetch("localhost:3000/api/v1/notes/new").then(res => res.json()).then(res => console.log)
  }
})
