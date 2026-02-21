const fetchData = callback => {
  setTimeout(() => {
    callback("Data fetched!");
  }, 500); };

setTimeout(() => {
  console.log('Hello, World!');
}, 1000);


console.log('This will log before the timeout.');
console.log('This will also log before the timeout.');