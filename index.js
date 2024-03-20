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

/*const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const menuContainer = document.getElementById("menu");
const orderItemsList = document.getElementById("order-items");
const orderTotalElement = document.getElementById("total");

function displayMenuItems(menu) {
    Object.entries(menu).forEach(([categoryName, items]) => {
        const categoryElement = document.createElement("h3");
        categoryElement.textContent = categoryName;
        menuContainer.appendChild(categoryElement);

        const listOfItemsElement = document.createElement("ul");
        menuContainer.appendChild(listOfItemsElement);

        items.forEach((itemName) => {
            const itemElement = document.createElement("li");
            itemElement.textContent = itemName;
            itemElement.addEventListener("click", () => addToOrder(itemName, itemName));
            listOfItemsElement.appendChild(itemElement);
        });
    });
}

let orderTotal = 0;
function addToOrder(itemName) {
    const listItem = document.createElement("li");
    listItem.textContent = itemName;
    listItem.onclick = function(
) {
        this.style.display = "none";
        orderItemsList.innerHTML += "";
        orderTotal -= 5;
        orderTotalElement.innerText = "Total: $" + orderTotal;
    }
    orderItemsList.appendChild(listItem);
}**/

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu-container');

    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemListElement = document.createElement('ul');
        menuContainer.appendChild(itemListElement);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.addEventListener('click', () => addToOrder(item));
            itemListElement.appendChild(listItem);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const listItem = document.createElement('li');
    listItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);

    // Calculate and update the total price
    const orderItemsCount = orderItemsList.children.length;
    const totalPrice = orderItemsCount * 10; // Assuming each item costs $10
    orderTotalElement.textContent = `Total: $${totalPrice}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
