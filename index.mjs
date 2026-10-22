function printAreaAndPerim(a, p) {
  console.log(a);
  console.log(p);
}

function useCircleAreaAndCircum(r, callback) {
  let pi;

  if (r % 7 === 0)
    pi = 22/7;
  else
    pi = 3.14;


  callback(pi * r * r, 2 * pi * r);
}

useCircleAreaAndCircum(144, printAreaAndPerim);
