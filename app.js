// todo app

var list_One = document.getElementById("listOne");

function AddItem(){

    var To_Do_Item = document.getElementById("ToDoItem");
    var li = document.createElement('li');
    var liText = document.createTextNode(To_Do_Item.value);
    
    if (To_Do_Item.value === ""){
        alert("Please enter some To-Do task")
    }
    else{
        li.appendChild(liText);
        li.setAttribute("class","todo-item")

        var Delete_Btn = document.createElement("button")
        var Delete_txt = document.createTextNode("Delete")
        Delete_Btn.appendChild(Delete_txt)
        Delete_Btn.setAttribute("class","delete-todo")
        Delete_Btn.setAttribute("onclick","DeleteItem(this)")

        var Edit_Btn = document.createElement("button")
        var Edit_txt = document.createTextNode("Edit")
        Edit_Btn.appendChild(Edit_txt)
        Edit_Btn.setAttribute("class","edit-todo")
        Edit_Btn.setAttribute("onclick","EditItem(this)")

        li.appendChild(Delete_Btn);
        li.appendChild(Edit_Btn);
        list_One.appendChild(li);
        To_Do_Item.value = ""
    }
}

function DeleteItem(e){
    e.parentNode.remove();
}
function DeleteAll(){
    list_One.innerHTML = ""
}
function EditItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var edit_txt = prompt("Enter to edit your text",val)
   e.parentNode.firstChild.nodeValue = edit_txt;
}