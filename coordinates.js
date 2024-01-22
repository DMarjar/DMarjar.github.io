const MaxXCoord = document.getElementById("xCoord");
const MaxYCoord = document.getElementById("yCoord");
const points = document.getElementById("points");
const time = document.getElementById("time");

const table = document.getElementById("table");
let markedPoints = [];

let intervalId;

// Validates the input values
function validate() {
  if (
    MaxXCoord.value == "" ||
    MaxYCoord.value == "" ||
    points.value == "" ||
    time.value == ""
  ) {
    alert("Please, insert valid values!");
    return false;
  }

  if (
    MaxXCoord.value == NaN ||
    MaxYCoord.value == NaN ||
    points.value == NaN ||
    time.value == NaN
  ) {
    alert("Please, insert valid values!");
    return false;
  }

  if (
    MaxXCoord.value <= 0 ||
    MaxYCoord.value <= 0 ||
    points.value <= 0 ||
    time.value <= 0
  ) {
    alert("Please, insert valid values!");
    return false;
  }

  if (points.value > MaxXCoord.value * MaxYCoord.value) {
    alert("The number of points can't be greater than the number of cells!");
    return false;
  }

  return true;
}

// Function to start the coordinate marking
function start() {
  if (!validate()) {
    return;
  }
  // Generates the table with the given coordinates
  generateTable(MaxXCoord.value, MaxYCoord.value);
  // Clears the marked points array
  markedPoints = [];
  // Begins the interval to mark the coordinates
  intervalId = setInterval(() => {
    markCoordinates(MaxYCoord.value, MaxYCoord.value, points.value);
  }, time.value * 1000);
}

// Function to stop the coordinate marking
function stop() {
  clearInterval(intervalId);
}

// Function to generate the table with the given coordinates
function generateTable(xCoord, yCoord) {
  // Clears the table
  table.innerHTML = "";
  // Generates the table
  for (let i = 0; i < yCoord; i++) {
    // Creates a row in the table
    const row = table.insertRow();
    for (let j = 0; j < xCoord; j++) {
      // Creates a cell in the row
      const cell = row.insertCell();
      // Generates an unique id for the cell using the coordinates
      cell.id = "td" + (i + 1) + (j + 1);
    }
  }
}

// Function to mark the coordinates
function markCoordinates(xCoord, yCoord, pointValue) {
  // Generates the coordinates to be possibly marked
  const generatedCoordinates = generateRandomCoordinates(
    xCoord,
    yCoord,
    pointValue
  );
  // Checks if the coordinates can be marked
  let canPaint = true;
  // Array to store the possible marks
  let possibleMarks = [];

  // Checks if the coordinates can be marked
  for (let i = 0; i < generatedCoordinates.length; i++) {
    let x = generatedCoordinates[i].x;
    let y = generatedCoordinates[i].y;
    let cell = document.getElementById("td" + y + x);

    // Checks if the cell is already marked
    if (!markedPoints.includes(cell)) {
      // If not, adds the cell to the possible marks array
      possibleMarks.push(cell);
    } else {
      // If yes, sets the canPaint variable to false and breaks the loop
      canPaint = false;
      possibleMarks = [];
      break;
    }
  }

  // If the array of possible marks is not empty and the coordinates can be marked, marks the coordinates
  if (possibleMarks.length > 0 && canPaint) {
    for (let i = 0; i < possibleMarks.length; i++) {
      // Marks the cell
      possibleMarks[i].className = "marked";
      // Adds the cell to the marked points array
      markedPoints.push(possibleMarks[i]);
    }
  }
}

// Function to generate random coordinates
function generateRandomCoordinates(xCoord, yCoord, pointValue) {
  // Array to store the generated coordinates
  const generatedCoordinates = [pointValue];
  // Generates the coordinates
  for (let i = 0; i < pointValue; i++) {
    let x = Math.floor(Math.random() * xCoord) + 1;
    let y = Math.floor(Math.random() * yCoord) + 1;
    // Adds the coordinates to the array in an object
    generatedCoordinates[i] = { x, y };
  }
  return generatedCoordinates;
}
