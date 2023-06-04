const input=document.getElementById('input');
const addbtn=document.getElementById('addbtn');
const todoList=document.getElementById('todoList')
let editTodo=null;

// adding task to list
addbtn.addEventListener("click",()=>
{
    const inputText = input.value.trim();
    if(inputText.length <=0)
    {
        alert("Write something..!")
        return false;
    }
    
    if(addbtn.value==="Edit")
    {
        editTodo.target.previousElementSibling.innerHTML=inputText;
        editLocalTodos(input);
        addbtn.value="Add";
        input.value="";
    }
    
    else
    {
    
    // creating p tag
    const li=document.createElement('li');
    const p=document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p);

    todoList.appendChild(li);
    input.value="";

    
    // creating edit botton

    const editbtn=document.createElement('button');
    editbtn.innerText="Edit"
    li.appendChild(editbtn);
    // adding classname atribute to button tag if separate them by , it adds multiple class names
    editbtn.classList.add('btn','editbtn');


    // creating delete botton

    const delbtn=document.createElement('button');
    delbtn.innerText="Remove"
    li.appendChild(delbtn);
    // adding classname atribute to button tag if separate them by , it adds multiple class names
    delbtn.classList.add('btn','deletebtn');
    

    // this is user defined function where we are passing a text from input tag as a parameter
    savelocalTodos(inputText);
    }
    
})


// remove and Edit
todoList.addEventListener("click",(e)=>
{
    //console.log(e.target.innerHTML);

    if(e.target.innerHTML==='Remove')
    {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }

    if(e.target.innerHTML==='Edit')
    {
      input.value=e.target.previousElementSibling.innerHTML;
      input.focus(); // this set the cursor on the input text box
      addbtn.value="Edit";
      editTodo=e;
    }
})

// function to save data to local storage
const savelocalTodos=(todo)=> 
{
     let todos =[];

     if(localStorage.getItem("todos")=== null)
     {
        todos=[];
     }
     else
     {
        todos=JSON.parse(localStorage.getItem("todos")); 
     }

      todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(todos)); // JSON.String is used to convert objects to string
     
}

// function to fetch the data from the local storage
const getLocalTodos =()=>
{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            //Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);


            // Creating Edit Btn
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            // Creating Delete Btn
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
        });
    }
    

}


// function to delete the data from local storage
const deleteLocalTodos=(todo)=>
{
    let todos =[];

    if(localStorage.getItem("todos")=== null)
    {
       todos=[];
    }
    else
    {
       todos=JSON.parse(localStorage.getItem("todos")); 
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex=todos.indexOf(todoText);
    console.log(todoIndex);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

// function to edit data in the local storage

const editLocalTodos=(todo)=>
{
    let todos=JSON.parse(localStorage.getItem("todos"));
    let todoIndex=todos.indexOf(todo);
    todos[todoIndex]=input.value;
    localStorage.setItem("todos",JSON.stringify(todos));
}


 // this is used to call the function getlocaltodos from local storage
 // this is used to save the data from erasing when the page reloded
document.addEventListener('DOMContentLoaded',getLocalTodos)