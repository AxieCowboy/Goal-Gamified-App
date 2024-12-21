const form = document.getElementById('grocery-form');
const input = document.getElementById('item-input');
const list = document.getElementById('grocery-list');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const itemName = input.value.trim(); // Get input value
    if (itemName) {
        addItem(itemName);
        input.value = ''; // Clear input field
    }
});

function addItem(name) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = name;

    // Add buttons for actions
    const markButton = document.createElement('button');
    markButton.textContent = 'Mark as Purchased';
    markButton.addEventListener('click', function() {
        markAsPurchased(listItem, markButton);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        removeItem(listItem);
    });

    // Append buttons to the list item
    listItem.appendChild(markButton);
    listItem.appendChild(removeButton);

    // Append list item to the grocery list
    list.appendChild(listItem);
}
