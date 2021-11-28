var icon=document.getElementById("menu-icon");
var menu=document.getElementById("header-navber");

icon.addEventListener('click', ()=>{
   if(menu.className=="hidden"){
       menu.classList.remove('hidden')
   }else{
       menu.classList.add('hidden')
   }
})