//your JS code here. If required.
// Get references to inputs and table
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Function to add a book
function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields.');
    return;
  }

  // Create new table row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  // Append row to table body
  bookList.appendChild(row);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';

  // Focus back to title for faster entry
  titleInput.focus();
}

// Event listener for Add Book button
submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent page reload
  addBook();
});

// Event delegation for Delete button
bookList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});



