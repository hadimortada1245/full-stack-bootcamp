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
let ourform=document.createElement("form");
let fullName=document.createElement("input");
fullName.type="text";
let mail=document.createElement("input");
mail.type="email";
let pass=document.createElement("input");
pass.type="password";
let confirmPass=document.createElement("input");
confirmPass.type="password";
let sub=document.createElement("input");
sub.type="submit";
ourform.appendChild(fullName);
ourform.appendChild(mail);
ourform.appendChild(pass);
ourform.appendChild(confirmPass);
ourform.appendChild(sub);
body.appendChild(ourform);
ourform.setAttribute("submit",function(event){
    event.preventDefault();
    var pattern0 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(! pattern0.test(mail.value)){
        alert("Please enter a valid email address.");
        return false;
    }
    var pattern1=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(! pattern1.test(pass.value)||!pattern1.test(confirmPass.value)){
        alert("Invalid pass");
        return false;
    } 
    alert("The form is submitted successfully");
    return true;
});
let inputs=document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("focus",function(){
        element.style.backgroundColor = 'lightblue';

    });
    element.addEventListener("blur",function(){
        element.style.backgroundColor="white";
    });
});


