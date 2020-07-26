var list = document.getElementById("list");

function addTodo(){
    var todo_item= document.getElementById("todo-item");
    var li =document.createElement("li")
    li.setAttribute("class","text")
    var liText= document.createTextNode(todo_item.value)
    li.appendChild(liText)
    var delBtn= document.createElement("Button")
    var delText= document.createTextNode("Delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)") 
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    list.appendChild(li)
    var editBtn= document.createElement("Button");
    var editText= document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editItem(this)")
    todo_item.value= ""
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val= e.parentNode.firstChild.nodeValue;
    var edit_value= prompt("Enter Edit Value", val)
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue= edit_value
}
function deleteAll(){
    list.innerHTML= ""
}