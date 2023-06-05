var inp = document.getElementById("inp")
var ul = document.getElementById("ul")
function delRow(btn){
btn.parentNode.remove();
}

function Edit(btn){
    var a = prompt("Edite")
btn.parentNode.firstChild.nodeValue = a
}
function ok(){
    var li = document.createElement("li")
    var inpval = document.createTextNode(inp.value)
    li.style.color = 'white'
    li.appendChild(inpval)
    ul.appendChild(li)
    inp.value = ""


var del = document.createElement("button")
var deltext = document.createTextNode("Delete")
del.appendChild(deltext)

del.setAttribute("class","btn")
del.setAttribute("onclick", "delRow(this)")
del.style.marginLeft = "20px"

li.appendChild(del);





var editBtn = document.createElement("button")
var editBtnVal = document.createTextNode("Edit")
editBtn.appendChild(editBtnVal)
editBtn.style.marginLeft = "10px"
editBtn.style.padding = "15px"
editBtn.style.borderRadius = "8px"
li.appendChild(editBtn)


editBtn.setAttribute("onclick" , "Edit(this)")


}


