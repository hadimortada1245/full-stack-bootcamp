let menu=document.querySelector(".menu");
let headerElement=document.querySelector("header");
let footerElement=document.querySelector("footer");
let menuElements=menu.children;
let headerElements=headerElement.children;
let footerElements=footerElement.children;
console.log(menuElements);
console.log(headerElements);
console.log(footerElements);
 let newdiv=document.createElement("div");
newdiv.className="container";
let newP=document.createElement("p");
newP.innerHTML="Hello, World!";
newdiv.appendChild(newP);
console.log(newdiv);
newdiv.style.color="blue";
newP.style.color="white";
newP.style.fontSize="24px";
newP.style.fontFamily="Helvetica";
newP.style.border="1px solid red";
let headings=document.querySelectorAll("h1,h3");
headings.forEach(heading => {
    heading.style.fontStyle = 'italic';
});
let btn=document.createElement("button");
btn.addEventListener("mouseover",function(){
btn.style.backgroundColor="green";
});
btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor="gray";
    });
let original=document.getElementById("original");
let buttons=document.querySelectorAll("button");
buttons.forEach(butn=>{
    butn.addEventListener('click',function(){
        console.log(this.innerHTML);
    });
});
let f=document.createElement("form");
let name=document.createElement("input");
name.type="txt";
name.id="name";
f.appendChild(name);
let mail=document.createElement("input");
mail.type="email";
mail.id="email";
f.appendChild(mail);
let s=document.createElement("button");
s.type="submit";
s.id="sub";
s.addEventListener('click',function(){
    console.log(name.value,mail.value)
});
f.appendChild(s);
let body= document.querySelector("body");
body.appendChild(name);
body.appendChild(mail);
body.appendChild(s);
let notOriginal=document.createElement("div");
notOriginal.innerHTML=original.innerHTML;

body.appendChild(notOriginal);
let h=document.querySelector("h1");
h.innerHTML="cloned";
notOriginal.style.display="none";
let showus=document.getElementById("clone-btn");
showus.addEventListener('click',function(){
    if(notOriginal.style.display==="none")
    notOriginal.style.display="block";
    else
    notOriginal.style.display="none"
});
let removeHeader=document.createElement("button");
removeHeader.addEventListener('click',function(){
    body.removeChild(headerElement);
});
body.appendChild(removeHeader);
function inser(){
    let newel=document.createElement("p");
    newel.innerHTML="new element";
    footerElement.parentElement.insertBefore(newel, footerElement);
}
inser();