// const fetchUserData = callback => {
//   console.log("📡 Fetching user from database...");
  
//   setTimeout(() => {
//     // Imagine this data came from a database
//     const user = { id: 1, name: "John", email: "john@example.com" };
//     callback(user);
//   }, 1000);
// };

// fetchUserData((userData) => {
//   console.log("👤 User received:", userData.name);
//   console.log("📧 Email:", userData.email);
// });
//-----------------------------------------------------------------------------------------------
const fetchUserData = iwantthisdata => {
    console.log(" 1 , FetcUserData called:", typeof iwantthisdata);
    const promise = new Promise((resolve, reject) => {
        console.log(" 2 , Promise created");
        resolve(() => {
        iwantthisdata("3 , Timeout executed, inside promise after 1 second");
    }, 1000);
    });
    return promise;
};

setTimeout(() => {
  console.log("Timeout executed after 3 seconds");
  fetchUserData()
    .then(data => {
    console.log("1st Data received:", data);
        return fetchUserData();
  }).then(data2 => {
    console.log("2nd Data received:", data2);
  });
  
}, 3000);

console.log("1");
console.log("2");

//-----------------------------------------------------------------------------------------------

// const fetchData = () => {
// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve('Done!');
// }, 1500);
// });
// return promise;
// };
// 1
// setTimeout(() => {
// console.log('Timer is done!');
// fetchData()
// .then(text => {
// console.log(text);
// return fetchData();
// })
// .then(text2 => {
// console.log(text2);
// });
// }, 2000);