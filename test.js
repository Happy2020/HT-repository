

// -----------------------------------------------------
// // Promise chaining
// function increaseAndPrint(n) {
//     return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         resolve(increased);
//       }, 1000)
//     })
//   }
  
//   increaseAndPrint(0)
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n)); // Promise chaning


// -----------------------------------------------------
// Promise
// const promise0 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("완료!"), 1000);
// });

// promise0.then(
//     result => console.log(result)
//     //result => alert(result)
// );

// -----------------------------------------------------
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 3000);
// })

// promise1.then((result) => {
//     console.log(result);
//         });
// console.log(promise1);

// -----------------------------------------------------
// // Promise .then .catch .finally
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("OK");
//     }, 2000);
// })

// console.log("시작");
// pr.then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("errkr");
//   })
//   .finally(() => {
//     console.log("끝");
//   });


// -----------------------------------------------------
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() {
//         console.log(this.name);
//     }
//     showAge() {
//         console.log(this.age);
//     }
// }

// const tom = new User("Tom", 19);
// const mike = new User("Mike", 30);

// tom.showName();
// mike.showAge();

// -----------------------------------------------------
// // call(), apply(), bind()
// var title = "환영합니다.";
// var house = {
//     title: "집이예요~",
//     room: {
//     	title: "방입니다.",
//         getTitle: function() {
//             return this.title;
//         }
//     }
// }

// var fn = house.room.getTitle;
// console.log(fn());
// // 환영합니다.

// console.log(house.room.getTitle());
// // 방입니다.

// house.getTitle = house.room.getTitle;
// console.log(house.getTitle());
// // 집이예요~
// -----------------------------------------------------


// // Closure : a combination of lexical environment and functions
// function makeAdder(x) {
//     return function(y) {
//         return x+y;
//     }
// }  

// const add3 = makeAdder(4);
// console.log(add3(2));   // 6

// const add10 = makeAdder(10);
// console.log(add10(5));  // 15
// console.log(add3(1));   // 5

// -----------------------------------------------------
// // 전개 구문 (Spread Syntax)
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let arr3 = [...arr1, 0, ...arr2];
// let arr4 = [...arr1, 0, arr2];

// console.log(arr3);
// console.log(arr4);


// -----------------------------------------------------
// // map method : 함수를 받아 특정 기능을 실행하고,
// //              새로운 배열을 반환
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];

// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         isAdult : user.age > 19,
//         id : index+1,
//     });
// });

// console.log(newUserList);
// console.log(userList);

// -----------------------------------------------------
// // find method vs. filter
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];

// const result = userList.filter((human) => {
//     if (human.age > 20)
//         return true;
//     return false;
// });

// console.log(result);

// -----------------------------------------------------
// let arr = [1,2,3,4,5,6,1,2,3];

// console.log(arr.indexOf(4));    // 3
// console.log(arr.indexOf(3,3));  // 8
// console.log(arr.lastIndexOf(2));// 7


// let arr = [1, 2];

// // arr = arr.concat([3, 4]);
// console.log(arr);
// console.log(arr.concat([3, 4]));
// console.log(arr);


// let arr = [1, 2, 3, 4, 5, 6];

// // splice 메소드는 array 자체에 영향을 미침
// console.log(arr);
// console.log(arr.splice(0, 2)); // 1,2
// console.log(arr); // 3,4,5,6
// console.log(arr.splice(0, 2, 7, 8)); // 1,2
// console.log(arr); // 7,8,5,6

// arr.splice(1,3);
// console.log(arr);
// arr.splice(0,2,7,8);
// console.log(arr);   // 7,8,3,4,5,6


// let arr = [3, 4, 5, 6, 7, 8, 9]

// const result = arr.filter((item) => {
//     return item % 2 === 0;
// });

// console.log(result);


// let strs = "abcdefgh";

// console.log(strs.slice(3));
// console.log(strs.slice(0));
// console.log(strs.slice(1,4));
// console.log(strs.slice(2,-3));
// console.log(strs.slice(1,0));
// console.log(strs.slice(3,-2));


// -----------------------------------------------------
// let ramdom_value;

// random_value = Math.floor(Math.random()*100)+1;
// console.log(random_value);

// -----------------------------------------------------
// let arr = ["Mike", "Tom", "Jane"];

// arr.forEach((name, index) => {
//     console.log(`${index+1}`, `${name}`);
// });


// -----------------------------------------------------
// let num = 10;
// let result = num++;
// console.log(result);
// console.log(num);


// -----------------------------------------------------
// let num = 10;

// num.toString(2);
// console.log(num);
// console.log(num.toString(16))