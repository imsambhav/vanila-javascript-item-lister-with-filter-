var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form Submit Event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter eve
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get the user input value.
  var newItem = document.getElementById("item").value;

  // Create new ele
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with imput value
  li.appendChild(document.createTextNode(newItem));
  // Create delete button element
  var deleteBtn = document.createElement("button");
  // Add bootstrap classes to deletebtn button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);

  // APpend li to list
  itemList.appendChild(li);
}

// Remove Item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Item function
function filterItems(e) {
  // conver to lower case
  var text = e.target.value.toLowerCase();
  // Get all lis
  var items = itemList.getElementsByTagName("li");
  // Convert it to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
