const text = document.querySelector("input");
const btn = document.querySelector(".btn")
const task = document.querySelector(".task");

btn.addEventListener('click',function(){
var para = document.createElement('p');
para.innerText = text.value;
task.appendChild(para);
text.value = "";
para.addEventListener('click',function(){
    para.style.color = "skyblue";
    para.style.textDecoration = "line-through"
})
para.addEventListener('dblclick',function(){
    task.removeChild(para);
})

})