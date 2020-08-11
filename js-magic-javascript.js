// function to get color you typed in and changing background color the color
function getColor() {
  // get the variable color name that was typed in
  let colorName = document.getElementById('my_color').value;
  // check what color was inputted and change background color
  if (colorName == 'red') {
    document.body.style.backgroundColor = "#fa7e6e";
  } else if (colorName == 'orange') {
    document.body.style.backgroundColor = "#fab854";
  } else if (colorName == 'yellow') {
    document.body.style.backgroundColor = "#fad857";  
  } else if (colorName == 'green') {
    document.body.style.backgroundColor = "#93fab9";  
  } else if (colorName == 'blue') {
    document.body.style.backgroundColor = "#69b8fa";  
  } else if (colorName == 'purple') {
    document.body.style.backgroundColor = "#aa84fa";    
  } else if (colorName == 'pink') {
    document.body.style.backgroundColor = "#fa9bdf";
  }  else if (colorName == 'white') {
    document.body.style.backgroundColor = "#ffffff";
  } else {
    alert('Pick a color that is available! Colors: red, orange, yellow, green, blue, purple, pink, or white')
  }
}


// function to get the Animal after you type it into the search bar
function getCharacter() {
  document.getElementById('boogie').style.display = "none";
  document.getElementById('flexing').style.display = "none";
  document.getElementById('luv').style.display ="none";
  document.getElementById('sammich').style.display = "none";
  document.getElementById('sleepy').style.display = "none";
  document.getElementById('ballerina').style.display ="none";
  document.getElementById('mad').style.display ="none";
  document.getElementById('vibing').style.display ="none";

  // Write your code here !!!!!
  let text = document.getElementById('character_action').value;

  if (text == 'boogie' || text == 'flexing' || text == 'luv' || text == 'sammich' || text == 'sleepy' || text == 'ballerina' || text == 'mad' || text == 'vibing') {
      document.getElementById(text).style.display = "block";
  } else {
      alert('Pick a character that is available!')
  }

}
