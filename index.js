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
  return "Currently serving " + currentlyServing + ".";
  }
}

function currentLine() {
  if (counter === currentlyServing) {
    return "The line is currently empty."
  } else {
    let string = `The line is currently: ${currentlyServing + 1}`
    for (var i = currentlyServing + 2; i < counter + 1; i++) {
      string += `, ${i}`;
    }
    return string + ".";
    
  }
}
