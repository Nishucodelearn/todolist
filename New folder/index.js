const inputfield=document.querySelector(".input textarea");
const todolist = document.querySelector(".todolist");
const pending = document.querySelector(".pending-num");
const clearbtn = document.querySelector(".clear-btn");


function alltask(){
    let task=document.querySelectorAll(".pending");
pending.textContent=task.length===0?"no":task.length;

let alllist=document.querySelectorAll(".list");
if(alllist.length>0){
    todolist.getElementsByClassName.marginTop="20px";
    clearbtn.style.pointerEvents="auto";
    return;
}
todolist.style.marginTop="0px";
    clearbtn.style.pointerEvents = "auto";
}


inputfield.addEventListener("keyup",(e)=>{
let inputval=inputfield.value.trim();
console.log(inputval);

if(e.key==="Enter" && inputval.length>0){
    let litag =` <li class="list pending" onclick="handlestatus(this)">
        <input type="checkbox">
        <span class="task">
            ${inputval}
        </span>
        <i class="fa fa-trash" id="trash" onclick="deletetask()"></i>
    </li>`;

    todolist.insertAdjacentHTML("beforeend",litag);
    inputfield.value="";
    alltask();
}
});
function handlestatus(e){
    const checkbox=e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classTist.toggle("pending");
    alltask();
}
function deletetask(e){
e.parentElement.remove();
alltask();
}
clearbtn.addEventListener("click",()=>{
    todolist.innerHTML="";
    alltask();
})
