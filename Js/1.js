var headerol=document.getElementById("headerol");
var headerimg=document.getElementById("headerimg");
var headerspan=document.getElementById("headerspan");

headerimg.onclick =function (){
    headerol.classList.add("open");
    headerimg.style.display="none";
};
headerspan.onclick =function (){
    headerol.classList.remove("open");
    headerimg.style.display="block";
};

