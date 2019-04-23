var counter = 0;
var currentlyServing = 0;

function takeANumber() {
  counter++;
  return `Welcome, person. You are number ${counter} in line.`;
}

function nowServing() {
  if (counter === currentlyServing) {
    return "There is nobody waiting to be served!"
  } else {
  currentlyServing++;
  return "Currently serving " + currentQue.shift() + ".";
  }
}

function currentLine(currentQue) {
  if (currentQue.length === 0) {
    return "The line is currently empty."
  } else {
  return currentQue.reduce((string, name, i) => {
    if (i !== 0) {
      string += ","
    }
    return string + ` ${i + 1}. ${name}`
  }, "The line is currently:");
  }
}
