// function sayHelloNTimes(name,n){
//     function greet() {
//         console.log(`Hi, ${name}!`);
//     }


//     for (let i = 0; i < n;i++) {
//         greet();
//     }
// }

// sayHelloNTimes("Bob", 3);
// sayHelloNTimes("Sally", 6);


// function sum(nums){
//     let count = 0;

//     function addNum(num) {
//         count += num;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         addNum(nums[i]);
//     }

//     console.log(count);
// }

// (sum([1,3,5]));



// // function createCounter() {
// //     let count = 0;

// //     return () => ++count;
// // }


// // let counter = createCounter();
// // console.log(counter()); // => 1
// // console.log(counter()); // => 2
// // counter.count; // undefined
// // let counter2 = createCounter();
// // console.log(counter2()); // => 1
// // console.log(counter2()); // => 1
// // console.log(counter2()); // => 1



// //! Why is this not working???

// function Counter () {
//     this._count = 5;

//     Counter.prototype.fire = function () {
//         this._count += 1;
//         return this._count;
//     }
// }

// let counter = new Counter();
// counter.fire(); // 1
// counter.fire(); // 2
// counter._count // 2
// counter._count = 8 //! this should return 0 but it does not





// // function Counter () {
// //     this._count = 0;
// //   }

// //   Counter.prototype.fire = function () {
// //     this._count += 1;
// //     return this._count;
// //   }

// //   let counter = new Counter();
// //   counter.fire(); // 1
// //   counter.fire(); // 2
// //   counter._count // 2
// //   counter._count = 0 // 0 (this works);


// function showName(firstName,lastName) {
//     let nameIntro= "Your name is ";

//     function makeFullName () {
//         return nameIntro + firstName + " " + lastName;
//       }
//       return makeFullName ();
// }

// console.log(showName ("Michael", "Jackson"));


// //! Need more understanding on this?
// function Kitten(name, age) {
//     this.name = name;
//     this.age = age;

//     this.meow = function () {
//         console.log(this.name + `says "meow!"`);
//     };
// }

// let Kitten = new Kitten("Earl", 2);
// let John = new Kitten("John", 6)

// console.log(John)


// function Kitten(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Kitten.prototype.meow = function () {
//     console.log(this.name + ' says "meow!"');

// };


// console.log(k1 = new Kitten("Earl", 2));
// console.log(k2 = new Kitten("Houdini", 1));


// k1 = new Kitten("Earl", 2);
// k2 = new Kitten("Houdini", 1);

// // `Object.getPrototypeOf` is the portable, preferred way to access
// // the `__proto__` property.
// Object.getPrototypeOf(k1); // == Kitten.prototype
// Object.getPrototypeOf(k2); // == Kitten.prototype


// //? Using arguments

// function sample(arguments) {
//     return arguments;
// }

// console.log(sample(5))
// console.log(sample())



//? Using a callback / asynchronous?

window.setTimeout(function () {
    console.log('hello');
    }, 2000);


function scheduleGreatMovieReminder(movie) {
    // remind in one min
    window.setTimeout(function () {
        console.log(`Remember to watch: ${movie}`);
    }, 60 * 1000);
    console.log(`Timer set for ${movie}`);
    }

    scheduleGreatMovieReminder("Citizen Kane");
    scheduleGreatMovieReminder("Touch of Evil");
    scheduleGreatMovieReminder("The Third Man");
