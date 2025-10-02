// Get references
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add a book
function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields.');
    return;
  }

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  bookList.appendChild(row);

  // Clear inputs
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
  titleInput.focus();
}

// Add book event
submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent page reload
  addBook();
});

// Delete book using event delegation
bookList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.closest('tr');
    if (row) row.remove();
  }
});




