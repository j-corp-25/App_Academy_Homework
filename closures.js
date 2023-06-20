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

    return count;
}

sum([1,3,5]);
