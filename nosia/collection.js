var productcon=document.getElementById("pro")
var search=document.getElementById("t1")
var list=productcon.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enterval=event.target.value.toUpperCase()
    for(var i=0;i<list.length;i++){
        var name=list[i].querySelector("p").textContent
        if(name.toUpperCase().indexOf(enterval)<0){
            list[i].style.display="none"
        }
        else{
            list[i].style.display="block"
        }
    }
    
})