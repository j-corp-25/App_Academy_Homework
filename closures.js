function sayHelloNTimes(name,n){
    function greet() {
        console.log(`Hi, ${name}!`);
    }


    for (let i = 0; i < n;i++) {
        greet();
    }
}

sayHelloNTimes("Bob", 3);
sayHelloNTimes("Sally", 6);


function sum(nums){
    let count = 0;

    function addNum(num) {
        count += num;
    }

    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i]);
    }

    console.log(count);
}

(sum([1,3,5]));



// function createCounter() {
//     let count = 0;

//     return () => ++count;
// }


// let counter = createCounter();
// console.log(counter()); // => 1
// console.log(counter()); // => 2
// counter.count; // undefined
// let counter2 = createCounter();
// console.log(counter2()); // => 1
// console.log(counter2()); // => 1
// console.log(counter2()); // => 1



//! Why is this not working???

function Counter () {
    this._count = 5;

    Counter.prototype.fire = function () {
        this._count += 1;
        return this._count;
    }
}

let counter = new Counter();
counter.fire(); // 1
counter.fire(); // 2
counter._count // 2
counter._count = 8 //! this should return 0 but it does not





// function Counter () {
//     this._count = 0;
//   }

//   Counter.prototype.fire = function () {
//     this._count += 1;
//     return this._count;
//   }

//   let counter = new Counter();
//   counter.fire(); // 1
//   counter.fire(); // 2
//   counter._count // 2
//   counter._count = 0 // 0 (this works);


function showName(firstName,lastName) {
    let nameIntro= "Your name is ";

    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
      }
      return makeFullName ();
}

console.log(showName ("Michael", "Jackson"));



function Kitten(name, age) {
    this.name = name;
    this.age = age;

    this.meow = function () {
        console.log(this.name + `says "meow!"`);
    };
}

let Kitten = new Kitten("Earl", 2);

