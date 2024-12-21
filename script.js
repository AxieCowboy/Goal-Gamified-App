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