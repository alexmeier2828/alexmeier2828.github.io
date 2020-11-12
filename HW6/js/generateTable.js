/*
Author: Alex Meier
Email: Alex_meier@student.uml.edu
*/
function errorMessage(message){
    tableContainer = document.getElementById("table");
    tableContainer.innerHTML = '<p class="error">' + message + '<p>';
}

function makeTable(form){
    var rowStart = parseInt(form.elements["rows"].value);
    var rowEnd = parseInt(form.elements["rowe"].value);
    var colStart = parseInt(form.elements["cols"].value);
    var colEnd = parseInt(form.elements["cole"].value);

    //initialize table
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

    //append table to the correct location in the document
    tableDiv = document.getElementById("table");
    tableDiv.innerHTML = "";
    tableDiv.appendChild(table)
}

//generate initial table on page load 
window.onload = function(){
    makeTable(document.getElementById("table-form"));
};



