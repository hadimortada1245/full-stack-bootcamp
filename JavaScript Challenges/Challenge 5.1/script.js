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
let newH1=document.createElement("h1");
newH1.innerHTML="Hadi Mortada";
body.appendChild(newH1);
newH1.style.width="25";
newH1.style.color="black";
newH1.style.borderBottom="1px dotted #000";
document.addEventListener("keydown",function(event){
    if(event.key === "a" || event.key === "A"){
        newH1.style.backgroundColor="red";
    }else if(event.key === "s" || event.key === "S")
            newH1.style.marginLeft="10px";
     else if(event.key === "d" || event.key === "D"){
        let newP=document.createElement("p");
        newP.innerHTML="Key D was pressed!";
        body.appendChild(newP);
     }else if(event.key === "w" || event.key === "W")
                newH1.style.display="none";
      else if(event.key === " ")newH1.style.fontSize="27px";                 
});
