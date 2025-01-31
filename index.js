/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* Write your implementation of greet() */
function greet(timeString) {
  let time = parseInt(timeString)
  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
      return "Good Evening";
  } else {
    return "Good Afternoon";    
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  let element = document.getElementById("greeting");
  element.innerText = `${string}`;
}
