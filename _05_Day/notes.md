# React Curriculum
Facebook created this technology to make their website faster and not every one uses it


React uses a virtual dom to create  and update the html. This is the cool stuff about React.

VDomNode is the root element of the document tree that is created when rendering a page using React.

It is very reusable and easy to create and update the html using React and then render it using a virtual dom element to render the page using a virtual dom element that contains the rendered html.

You can think of components inside react that interact with each other using a virtual dom element that contains the rendered html that will be rendered using the virtual dom element that contains the rendered html that will be rendered using the virtual.


## Importing and exporting your React

```js
const {a: x, b: y} = {a: 1, b: 2};

x; // 1
y; // 2

const {b, a} = {a: 1, b: 2}

a; // 1
b; // 2


// this works by matching object properties

const {a: a, a: { b },c, b} = {a: 1, b: 2, c: 3}

a; undefined; // undefined
b; undefined; // undefined
c; // 3


```

More on assignment
```js
const multiply = n({ one: n, two: n * 2, three: n * 3 });

const {one, two, three} = multiply(10);
one; // 10
two; // 10
three; // 10
```

```js
this.family = {
  userId: 1,
  sons: {
    fname: 'Ned',
    lname: 'Ruggeri',
    nieces: [{
      fname: 'Juan',
      lname: 'Gomez'
    }]
  },
  daughters: {
    fname: 'Nenia',
    lname: 'Gonzales'
  }
};

const { userId, sons: { fname: sonsFname, lname: sonsLname, nieces: [{ fname: niecesFname, lname: niecesLname }] }, daughters: { fname: daughtersFname, lname: daughtersLname } } = this.family;

```

## Using DOM nodes with react

You need to three things
- Using JSX to build the "element tree"
- Buil the virtual DOM by invoking `render`
- "waiting" for React to render its virtual DOM into real DOM

```jsx
const hello = <h1> Hello World!</h1>

// this is just one option

const navBar = (
    <nav>
     <ul>
         <li>Home</li>
         <li>Profile</li>
         <li>Settings</li>
     </ul>
  </nav>

);

```

<!-- ! -->
You can also use classes and sources in jxs

```js

const navBar = (
    <nav>
     <ul>
         <li className="selected"><a>Home</a></li>
         <li>Profile</li>
         <li>Settings</li>
     </ul>
  </nav>

);

```
## Create react function
```js
function NavBar() {
  return (
    <nav>
      <h1>Pet App</h1>
      <ul>
        <li className="selected">
          <a href="/pets">Pets</a>
        </li>
        <li>
          <a href="/owners">Owners</a>
        </li>
      </ul>
    </nav>
  );
}

const rootElement = document.getElementById ('root')

ReactDOM.render(<NavBar />, rootElement);
```
To convert the function above into a real DOM you need to use `ReactDOM.render`


use  `react.fragment` when the element you want to render is the same as the element
