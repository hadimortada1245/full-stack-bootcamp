setTimeout(sayHello, 5000);
function sayHello(){
alert("hello world");
}
let clock=document.createElement("div");
let body=document.querySelector("body");
body.appendChild(clock);
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clock.textContent = timeString;
  }
  updateClock();
  setInterval(updateClock, 1000);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
  
  myPromise.then((message) => {
    console.log(message); // Output: "Promise resolved!"
  }).then(function(){
    alert("Chained message!");
  });