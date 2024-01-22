const xCoord = document.getElementById("xCoord");
const yCoord = document.getElementById("yCoord");
const points = document.getElementById("points");
const time = document.getElementById("time");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

function createArray() {
    const array = [xCoord.value][yCoord.value];
    const coord = coordinatesGenerator(points.value);

    let canPaint = true;
    for (let i = 0; i < coord.length; i++) {
        if (array[coord[i].x][coord[i].y] === 'X') {
            canPaint = false;
            break;
        } 
    }

    if (canPaint) {
        for (let i = 0; i < coord.length; i++) {
            array[coord[i].x][coord[i].y] = 'X';
        }
    }
}


function coordinatesGenerator(numberOfPoints) {
  const generatedCoordinates = [numberOfPoints];
  for (let i = 0; i < generatedCoordinates.length; i++) {
    let x = Math.floor(Math.random() * xCoord.value + 1);
    let y = Math.floor(Math.random() * yCoord.value + 1);
    generatedCoordinates[i] = { x, y };
  }
  return generatedCoordinates;
}

// AQUI TERMINA EL CODIGO QUE HIZO NARVIK //

// AQUI EMPIEZA EL CODIGO QUE HICE YO //

function createTable() {
  // If the table already exists dont create it again
  if (document.getElementById("table")) {
    return;
  }
  // Create the table
  const table = document.createElement("table");
  table.id = "table";

  for (let i = 0; i < xCoord.value; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < yCoord.value; j++) {
      let td = document.createElement("td");
      td.id = "td" + (i + 1) + (j + 1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  const tableContainer = document.getElementById("table-container");
  table.className = "table-primary";
  tableContainer.appendChild(table);

  runProgram();
}

function runProgram() {
  const time = parseInt(document.getElementById("time").value);
  const points = parseInt(document.getElementById("points").value);
  const MaxXCoord = parseInt(document.getElementById("xCoord").value);
  const MaxYCoord = parseInt(document.getElementById("yCoord").value);

  console.log("Running program");
  // For each point, generate a random coordinate
  for (let i = 0; i < points; i++) {
    // Generate a random number for X
    let xCoord = Math.floor(Math.random() * MaxXCoord + 1);
    // Generate a random number for Y
    let yCoord = Math.floor(Math.random() * MaxYCoord + 1);
    // Set the random coordinates to the table
    let td = document.getElementById("td" + xCoord + yCoord);
    if (td.className === "marked") {
      console.log("Already marked");
      continue;
    } else {
      td.className = "marked";
    }
  }
}
