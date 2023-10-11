# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The && operator returns true if both of its operands are true, while the || operator returns true if at least one of its operands is true.
  the way they can be used outside if statements such as, assignments, variable declarations, and expressions.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation is where the evaluation of an expression is stopped as soon as its outcome can be determined. and it can improve efficiency and prevent unnecessary computations.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  nullish coalescing provides a way to handle default values when dealing with potentially null or undefined values

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  its a concise way to write a conditional expression.
  if/else is better suited for more complex conditional control flow
- What is the `?.` (optional chaining) operator? When would you use it?
  it allows you to safely access properties or call methods on an object without having to explicitly check if the object or any intermediate properties are null or undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread syntax allows you to expand elements of an iterable into another array or object.
  with objects you use it inside {}
  with arrays you use it insdie []
- What data types can be spread into an array? Into an object?
  you can use the spread operator to spread data from various data types into arrays and objects.
- How does spread syntax differ from rest syntax?
  Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
