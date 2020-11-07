/*
Author: Alex Meier
Date: October 28th, 2020
GUI - Homework 5
*/
function errorMessage(message){
    tableContainer = document.getElementById("table");
    tableContainer.innerHTML = '<p class="error">' + message + '<p>';
}

function makeTable(){
    var rowStart = parseInt(document.getElementById("rows").value);
    var rowEnd = parseInt(document.getElementById("rowe").value);
    var colStart = parseInt(document.getElementById("cols").value);
    var colEnd = parseInt(document.getElementById("cole").value);

    //check input
    if(isNaN(rowStart) || isNaN(rowEnd) || isNaN(colStart) || isNaN(colEnd)){
        errorMessage("Invalid Input - Value must be numeric");
        return;
    }
    if(rowStart < -50 || rowEnd > 50 || colStart < -50 || colEnd > 50){
        errorMessage("Input out of range - Values must be between -50 and 50");
        return;
    }
    if(rowEnd < rowStart || colEnd < colStart){
        errorMessage("Invalid Input - Start value cannot be greater then end value");
        return;
    }

    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    //Create headers for the columns 
    var topRowHeader = document.createElement("tr");
    //First column is row headers, so put in a spacer
    var spacer = document.createElement("div");
    topRowHeader.appendChild(spacer);
    for(var column = colStart; column <= colEnd; column++){
        var th = document.createElement("th");
        th.innerHTML = column;
        topRowHeader.appendChild(th);
    }
    tableBody.appendChild(topRowHeader);

    //generate table body
    for(var row = rowStart; row <= rowEnd; row++){
        console.log("here")
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        //create header for row
        th.innerHTML = row;
        tr.appendChild(th);
        //generate row
        for(var column = colStart; column <= colEnd; column++){
            var number = row * column;
            var td = document.createElement("td");
            td.innerHTML = number;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);

    tableDiv = document.getElementById("table");
    tableDiv.innerHTML = "";
    tableDiv.appendChild(table)
}
makeTable();