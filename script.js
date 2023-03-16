window.promises = [];

// Create an array of five promises
for (let i = 0; i < 5; i++) {
  promises.push(new Promise(resolve => {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000; // Random time between 1 and 5 seconds
    setTimeout(() => resolve(`Promise ${i+1} resolved after ${timeout/1000} seconds`), timeout);
  }));
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch(error => console.log(error));


// Do not change the code above this
// add your promises to the array `promises`
