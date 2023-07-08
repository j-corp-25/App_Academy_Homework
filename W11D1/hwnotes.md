# Hook

Hooks let you use different React features in your own components. You can use the default hooks or combine them to build your own custom ones.


## State hooks

Lets a component remember information like user input, clicking a button, writing something in a field, etc.

A form component can use state to store the input value

### To add state use of the hooks below

- `useState`
- `useReducer`



## Contextual hooks/context hooks

Context lets a component received information from distant parents without passing it as props.

- `useContext` reads and subscribes to a context
- ```js
     function Button() {
        const theme= useContext(ThemeContext);
     }

### Normally you would pass a `context` down by context drilling which is very un-intuitive


```js
<App theme="dark">
  <Header theme={this.props.theme}>
    <Navigation theme={this.props.theme}>
      <NavItem theme={this.props.theme} />
    </Navigation>
  </Header>
  <Content />
  <Footer />
</App>

```

Now lets say the parent has the theme below

```js
// Create a context
const ThemeContext = React.createContext('light');

// In your top-level component
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

```

You can pass this down to distant children
```js
// Create a context
const ThemeContext = React.createContext('light');

// In your parent component
function ParentComponent() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

// In your child component
function ChildComponent() {
  const theme = React.useContext(ThemeContext);
  // Now you can use the theme variable in your component
}

```

## Refs Hooks
