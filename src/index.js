document.addEventListener("DOMContentLoaded", () => {

 
  
    let submitBtn = document.getElementById('submit-btn')
    let form = document.querySelector('form')

    form.addEventListener('submit', function(event){
      event.preventDefault()
      let task = document.querySelector('#new-task-description').value 
      let newTask = document.createElement('li')
      newTask.innerHTML = task
      
      document.querySelector('#tasks').appendChild(newTask)

    })




});
