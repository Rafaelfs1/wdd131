// Select the input, button, and list elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create an event listener for the button
button.addEventListener('click', function() {
    // Check if the input value is not empty
    if (input.value.trim() !== '') {
        // Create new list item (li) and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content of the li and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add the 'delete' class for styling

        // Append the delete button to the li
        li.append(deleteButton);
        // Append the li to the list
        list.append(li);

        // Add an event listener to the delete button to remove the li on click
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        // Clear the input field and focus on it for the next entry
        input.value = '';
        input.focus();
    } else {
        // If the input is empty, focus back on the input field
        input.focus();
    }
});
