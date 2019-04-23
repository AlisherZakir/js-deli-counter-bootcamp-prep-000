function takeANumber(currentQue, newPerson) {
  currentQue.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentQue.length} in line.`;
}

function nowServing(currentQue) {
  if (currentQue.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
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
