document.addEventListener("DOMContentLoaded", function(){
  let user_root_url = "http://localhost:3000/api/v1/users"
  let note_root_url = "http://localhost:3000/api/v1/notes"
  let configuration_post = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  }
  let userName = document.createElement("h1")

  function getUser(){
    fetch(user_root_url)
      .then(res=> res.json())
      .then(json => {
        userName.innerText = json[0].name;
        document.body.prepend(userName)
      })
  }

  function getNotes(){
    fetch(note_root_url)
      .then(res => res.json())
      .then(json =>{

      })
  }

  function createNote(newPostbody){
    configuration_post.body = JSON.stringify(newPostbody);
    fetch(note_root_url, configuration_post).then(res => res.json())
  }
})
