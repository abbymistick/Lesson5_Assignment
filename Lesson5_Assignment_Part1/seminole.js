// Program Name: Seminole Trojans
// Program Topics: Variables, Functions, Arrays
// Author: Abby Mistick
// Date: September 30, 2015
// 
// 
// Filename: seminole.js
// 

// global variables

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var opponents = ["Lightning", "Combines", "Combines", "Combines", "Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", "River Raiders", "River Raiders", "River Raiders", "Big Dippers", "Big Dipeprs", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];

var gameLocations = 
    ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home","home","away", "away", "away", "away", "", "away", "away", "away", "away", "away", "away", "", "home", "home", "home", "home", "home", "home", "", ""];

// funtion to place daysOfWeek values in header row cells
  function addColumnHeaders() {
    var i = 0;
    while (i < 7) {
     document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
      i++;
    } // end of while loop
    
   
  } // end of addColumnHeaders function


// Function to place day of month value in first p element
// Within each table data cell that has an id 
  function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    do {
      var tableCell = document.getElementById("08-" + i);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[0].innerHTML = i;
      i++;
      
    } while (i < 32);
    
    
    
    
  } // End of addCalendarDates function

// This function will place the game information in the calendar function 
// Function to place opponents and gameLocation values in
// Second p elemtn within each table data cell that has an id
  function addGameInfo(){
    var paragraphs = "";
    for (var i = 0; i < 31; i++){
      var date = i + 1;
      var tableCell = document.getElementById("08-" + date);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[1].innerHTML += opponents[i]; 
      if (gameLocations[i] === "away") {
        paragraphs[1].innerHTML = "@";
        paragraphs[1].innerHTML += opponents[i];
      } // End of if
      else if (gameLocations[1] === "home") {
        paragraphs[1].innerHTML = "vs ";
        paragraphs[1].innerHTML += opponents[i]; 
      } // End of else if 
    } // End of the for loop 
  } // End of function




// Function to load the calendar content in the calendar when the page laods
function setUpPage() {
  addColumnHeaders(); 
  addCalendarDates();
  addGameInfo();
 
} // End of setUpPage function



// This statement will add the column headers tot he page immediately when the page loads in the browser 
window.addEventListener("load", setUpPage(), false);

