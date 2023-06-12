const timer = function(timeArr) {
//it sould not schedule an alarm if it is empty
  if (timeArr.length === 0) {
    return;
  }

  for (const time of timeArr) {
    if (time < 1 || isNaN(time)) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};

//Calling function with CLI arguments
timer(process.argv.slice(2));