const input=document.getElementById('input');
const addbtn=document.getElementById('addbtn');
const todoList=document.getElementById('todoList')


addbtn.addEventListener("click",()=>
{
    const inputText = input.value.trim();
    if(inputText.length <=0)
    {
        alert("Write something..!")
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
    editbtn.innerText="edit"
    li.appendChild(editbtn);
    // adding classname atribute to button tag if separate them by , it adds multiple class names
    editbtn.classList.add('btn','editbtn');


    // creating delete botton

    const delbtn=document.createElement('button');
    delbtn.innerText="Remove"
    li.appendChild(delbtn);
    // adding classname atribute to button tag if separate them by , it adds multiple class names
    delbtn.classList.add('btn','deletebtn');
    
    }
    
})

todoList.addEventListener("click",(e)=>
{
    console.log(e.target);
})