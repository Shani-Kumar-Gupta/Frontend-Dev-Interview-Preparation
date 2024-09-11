/*
The main goal of debouncing is to improve performance and user experience by preventing a function from being called 
unnecessarily multiple times in quick succession. For example, in a search input field, debouncing can be used to 
delay the API call until the user stops typing, thereby reducing the number of API requests.
*/

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => { fn.apply(this, args) }, delay);
  }
};