document.addEventListener("DOMContentLoaded", () => {

 
  // create a button element
  // button must have attribute called "data description"
  //the value of the attribute is equal to the task
  //a delete request needs to happen
  //append button to li
  //add delete function (removeChild) (li)

 
    let form = document.querySelector('form')

    form.addEventListener('submit', function(event){
      event.preventDefault()
      let task = document.querySelector('#new-task-description').value 
      let newTask = document.createElement('li')
      newTask.id = task
      newTask.innerHTML = task
      newTask.setAttribute('priority', document.querySelector('#priority-select').value)


      if (newTask.getAttribute('priority') === "High") {
        newTask.style.color = "#a10a05"
      }
      else if (newTask.getAttribute('priority') === "Medium") {
        newTask.style.color = "#cfa902"
      }
      else if (newTask.getAttribute('priority') === "Low") {
        newTask.style.color = "#009c2c"
      }


      document.querySelector('#tasks').appendChild(newTask)
      let deleteBtn = document.createElement('button')
      deleteBtn.innerText = 'x'
      deleteBtn.setAttribute('data-description', task)
      newTask.appendChild(deleteBtn)

      deleteBtn.addEventListener('click', function() {
        newTask.remove()
      })
      form.reset()
    })


    let dropdown = document.createElement('select')
    dropdown.name = "priority"
    dropdown.id = "priority-select"
    let priorityArray = ["High", "Medium", "Low"]
    priorityArray.forEach(function(priority){
      let option = document.createElement('option')
      option.value = priority 
      option.innerText = priority 
      dropdown.appendChild(option)
    })
    document.querySelector('form').appendChild(dropdown)




});
