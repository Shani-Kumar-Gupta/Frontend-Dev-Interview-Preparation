for (var i = 0; i < 3; i++) {
  setTimeout(function() {
      console.log(i);
  }, 1000);
}


for (var i = 0; i < 3; i++) {
  function cls(j) {
      setTimeout(function() {
          console.log(j);
      }, 1000);
  }
  cls(i);
}