const timer = function(arr) {
  if (arr === []) {
    console.log(`This is an empty array`);
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = Number(arr[i]);
  }

  for (let i = 0; i < result.length; i++) {
    if (typeof result[i] !== "number" || result[i] < 1) {
      continue;
    } else {
      let arrSec = result[i] * 1000;
      setTimeout(() => {
        process.stdout.write('.');
      }, arrSec);
    }
  }
};


timer(process.argv.slice(2));