//your JS code here. If required.
// Get references to inputs, form, and table
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const bookList = document.getElementById('book-list');
const form = document.getElementById('book-form');

// Function to add a book row
function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new table row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  // Append the row to the table body
  bookList.appendChild(row);

  // Clear input fields
  form.reset();
}

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  addBook();
});

// Event delegation for delete buttons
bookList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});

