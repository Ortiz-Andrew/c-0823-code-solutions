# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to debug our code
- What is the purpose of events and event handling?
  event handling is used to handle and verify user input, user actions, browser actions.
  events are things that happens the system you are programmming, the system produces a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically tajen when the event occurs.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  add event listener
- What is a callback function?
  A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
  the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is the property of the event object that refers to the element on which the event is triggered.
  you can check by console logging the property
  and you can get more info on MDN by searching event:target property
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  first line of code is being excuted when the click occurs
  second line of code is excuting the handle click function and passing its return value as the callback to the click event listener

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
