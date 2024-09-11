function throttling(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastcall < delay) {
      return;
    }
    lastcall = now;
    fn.apply(this, args);
  }
}