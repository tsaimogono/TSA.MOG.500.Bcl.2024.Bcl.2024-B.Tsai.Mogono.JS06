/*// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML

    // Loop through each category and its items in the menu object

        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);**/

//Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');
  for (const [category, items] of Object.entries(menu)) {
    const categoryElem = document.createElement('h3');
    categoryElem.textContent = category;
    menuContainer.appendChild(categoryElem);

    const itemsList = document.createElement('ul');
    menuContainer.appendChild(itemsList);
    items.forEach(item => {
      const itemElem = document.createElement('li');
      itemElem.textContent = item;
      itemElem.onclick = () => addToOrder(item);
      itemsList.appendChild(itemElem);
    });
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  const orderList = document.getElementById('order-items');
  const orderTotalElem = document.getElementById('order-total');

  // Create a list item for the order
  const orderItem = document.createElement('li');
  orderItem.textContent = itemName;
  orderList.appendChild(orderItem);

  
orderItem.onclick = () => removeOrderItem(orderItem);

  // Calculate and update the total price
  const currentTotal = parseFloat(orderTotalElem.textContent);
  const itemPrice = 38; // Assuming each item costs R38 (you can customize this)
  const newTotal = currentTotal + itemPrice;
  orderTotalElem.textContent = newTotal.toFixed(2);
}

function removeOrderItem(item) {
    const orderTotalElem = document.getElementById('order-total');
  
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const itemPrice = 38; // Assuming each item costs R38 (you can customize this)
    const newTotal = currentTotal - itemPrice;

    item.remove();
    
    orderTotalElem.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
}

// Call the init function to start the menu system
initMenuSystem(menu);


