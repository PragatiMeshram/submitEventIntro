const cl = console.log;

    // select HTML element
//submit is a form event
const todoForm = document.getElementById("todoForm")
const todoItemControl = document.getElementById('todoItemControl')
const todoContainer = document.getElementById('todoContainer')
//cl(todoItemControl)


    // Array of objects
let todoArr = [
    {
        todoItem : "JS"
    },
    {
        todoItem : "TS"
    }
];


    // createList function
function createList(arr){
    let result = ' ';
    arr.forEach(ele => {
        result += `<li class="list-group-item d-flex justify-content-between">
                        <strong>
                            ${ele.todoItem}
                        </strong>
                        <div>
                            <button class="btn btn-sm btn-outline-info">Edit</button>
                            <button class="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                    </li>`
    });
    todoContainer.innerHTML = result
}
createList(todoArr)


         // Add todo function
// submit events default behavour to reload the page
 
function onTodoAdd(eve){
    eve.preventDefault()
    let todoObj = {
         todoItem : todoItemControl.value
    }
    todoForm.reset()
    todoArr.push(todoObj)  //create API success :: Create a new LI for new todoObj
    createList(todoArr)
}

         //submit Event
todoForm.addEventListener('submit', onTodoAdd)
