const form = document.getElementById('grocery-form');
const input = document.getElementById('item-input');
const list = document.getElementById('grocery-list');
const counter = document.getElementById('item-counter'); // Total items counter
const purchasedCounter = document.getElementById('purchased-counter'); // Purchased items counter

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    const itemName = input.value.trim(); // Get input value
    if (itemName) {
        addItem(itemName);
        input.value = ''; // Clear input field
    }
});

function addItem(name) {
    const fragment = document.createDocumentFragment();
    const listItem = document.createElement('li');
    listItem.textContent = name;

    const markButton = document.createElement('button');
    markButton.textContent = 'Mark as Purchased';
    markButton.addEventListener('click', function () {
        markAsPurchased(listItem, markButton);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        removeItem(listItem);
    });

    listItem.appendChild(markButton);
    listItem.appendChild(removeButton);
    fragment.appendChild(listItem);

    list.appendChild(fragment);
    updateCounters(); // Update counters after adding an item
}

function markAsPurchased(item, button) {
    if (!item.classList.contains('purchased')) {
        item.classList.add('purchased'); // Add purchased style
        button.disabled = true; // Disable button
        updateCounters(); // Update counters after marking an item as purchased
    }
}

function removeItem(item) {
    if (confirm('Delete this item?')) {
        item.remove();
        updateCounters(); // Update counters after removing an item
    }
}

function updateCounters() {
    // Get total number of list items excluding the counters themselves
    const totalItems = list.querySelectorAll('li:not(#item-counter):not(#purchased-counter)').length;
    const purchasedItems = list.querySelectorAll('.purchased').length;

    counter.textContent = `Total items: ${totalItems}`;
    purchasedCounter.textContent = `Purchased items: ${purchasedItems}`;
}

input.addEventListener('input', function () {
    if (input.value.trim() === '') {
        input.setCustomValidity('Item name cannot be empty.');
    } else {
        input.setCustomValidity('');
    }
});
