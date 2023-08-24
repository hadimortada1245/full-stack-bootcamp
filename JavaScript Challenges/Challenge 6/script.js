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
  function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000);
    });
  }
  async function fetchData() {
    try {
      const result = await simulateNetworkRequest();
      console.log(result); 
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
  async function fetchSinglePost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  fetchSinglePost();
  