function Dog(name) {
    this.name = name
}

Dog.prototype.woof = function() {
    console.log(this.name + "woof")
}


Object.setPrototypeOf(Dog.prototype, Animal.prototype)


Dog.prototype = Object.create(Animal.prototype);


function Animal (name) {
    this.name = name;
  };

  Animal.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };

  function Dog () {};

  Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal

  Dog.prototype.constructor = Dog // otherwise instances of Dog will have 'instance.constructor === Animal'

  Dog.prototype.bark = function () {
    console.log("Bark!");
  };

  const liesel = new Dog("Liesel");

  liesel.bark();
  liesel.sayHello();
