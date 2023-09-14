# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  returns the HTML element that triggered an event
- What is the affect of setting an element to `display: none`?
  it completely removes the element from the page and has no effect on the layout
- What does the `element.matches()` method take as an argument and what does it return?
  it takes a selector as an argument and returns a boolean value of true if it matches the selector and false if it does not
- How can you retrieve the value of an element's attribute?
  .selecting the element using its tag name, class, or id
  .then using the getAttribute() method to retrieve the value of the attribute
- At what steps of the solution would it be helpful to log things to the console?
  towards the beginning so you can catch stuff right away
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  you would need to manually attach event listeners to each element in the new tab or view.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  you would have to manually write individual if statements or switch statements for each view

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
