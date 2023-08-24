let newbtn=document.createElement("button");
newbtn.innerHTML="new button";
let body=document.querySelector("body");
body.appendChild(newbtn);
newbtn.style.padding="10px 10px";
newbtn.style.fontSize="16px";
newbtn.style.backgroundColor="#3498db";
newbtn.style.color="#ffffff";
newbtn.style.border="none";
newbtn.style.cursor="pointer";
newbtn.addEventListener("click",function(){
    newbtn.style.backgroundColor="red";
newbtn.style.color="white";
newbtn.innerHTML="clicked "+parseInt( Math.random()*1000+1);

});