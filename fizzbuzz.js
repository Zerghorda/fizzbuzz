$(function () {
  function fizzbuzz(n) {
    if (n === 0) {
      return "";
    } else {
      for (let index = 1; index < n; index++) {
        fizzbuzzErtek(index) + ", ";
        txt += index + ", ";
      }
      txt += fizzbuzzErtek(n);

      return txt;
    }
 
  }
});
function fizzbuzzErtek(x) {
  let ertek = "";
  if (index % 3 === 0) {
    ertek = "fizz";
  } else if (index % 5 === 0) {
    ertek = index + "buzz";
  }
  else if (index % 5 === 0 && index %3 ===0) {
    ertek = index + "fizzbuzz";
  }
  return ertek;
}



