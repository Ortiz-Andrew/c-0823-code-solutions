# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  returns the HTML element that triggered an event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  its possible cause of event propagation in the DOM
- What DOM element property tells you what type of element it is?
  tag name
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a selector as an agrument and returns it to the closest ancestor of the element that matches the provided selector.
- How can you remove an element from the DOM?
  remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  using event delegation.

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
