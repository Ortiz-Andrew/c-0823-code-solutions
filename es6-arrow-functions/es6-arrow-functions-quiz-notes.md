# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const functionName = (parameter1, parameter2, parameter3) => {

};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  return of a single expression
- When using _concise body syntax_, how do you return an object literal?
  by wrapping the object literal in parentheses.
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    none
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    one which is the arrow function
  - What type of argument is passed to the function `foo`?
    arrow function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  bar((y)) => - How many arguments does the arrow function take?
  one, y - What value does it return?
  none - How many arguments are passed to the function `bar`?
  one - What type of argument is passed to the function `bar`?
  arrow function - When does the arrow function's code get executed?
  console.log
- How does the value of `this` differ between standard functions and arrow functions?
  difference is that arrow functions retain the this value from their surrounding context, while standard functions have a dynamically determined this value based on how they are called

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
