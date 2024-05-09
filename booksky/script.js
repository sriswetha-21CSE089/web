var overlay=document.querySelector(".overlay")
var pop=document.querySelector(".pop")
var but=document.getElementById("addpop")
function show(){
    overlay.style.display="block"
    pop.style.display="block"
}
var can=document.getElementById("cancel")
can.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    pop.style.display="none"
})
var contain=document.querySelector(".container")
var add=document.getElementById("add")
var btitle=document.getElementById("t1")
var bauthor=document.getElementById("t2")
var bdes=document.getElementById("t3")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div");
    div.setAttribute("class","bc")
    div.innerHTML=`<h2>${btitle.value}</h2>
    <h5>${bauthor.value}</h5>
    <p>${bdes.value}</p>
    <button onclick="del(event)">delete</button>
    `
    contain.append(div)
    overlay.style.display="none"
    pop.style.display="none"
})
function del(event){
    event.target.parentElement.remove()
}