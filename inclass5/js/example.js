var page = document.getElementById("page");
var pageDescendents = page.children;
var table  = pageDescendents[2];
// ADD NEW ITEM TO END OF LIST
var listItemOnEnd = document.createElement('li');
listItemOnEnd.innerHTML = 'cream'; 
table.appendChild(listItemOnEnd);

// ADD NEW ITEM START OF LIST
var listItemAtBeginning = document.createElement('li');
listItemAtBeginning.innerHTML = "kale"
table.prepend(listItemAtBeginning);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
table.childNodes.forEach(li => {
    console.log(li.classList = "cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var numberOfItems = table.childElementCount;
var itemCountelement = document.createElement("p");
itemCountelement.innerHTML = numberOfItems;
var header = pageDescendents[1];
header.innerText = header.innerText + " " + numberOfItems;
