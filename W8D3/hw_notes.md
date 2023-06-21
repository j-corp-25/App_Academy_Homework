# HW W8D3

 in js you cant declare a variable without using a
 `var` , `const` or `let`


 Constructor Steps: Recap
Say we call let cat = new Cat(). Here's what JS does:

JavaScript creates a new blank object.
JavaScript sets a special cat.__proto__ property to Cat.prototype. This way the instance of the class is connected to a prototype where all the instance methods are defined.
JavaScript runs the code in the body of the Cat function. It sets this to the blank object. The constructor presumably sets some attributes of the object.
JavaScript ignores the return value of the constructor function. Instead, the new Cat instance is returned, and set to cat.

