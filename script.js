//your JS code here. If required.
 // Get references to form elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Event listener to add a new book
submitBtn.addEventListener('click', function () {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // Validation: ensure all fields are filled
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
  `;

  // Insert the new row at the TOP of the table
  bookList.prepend(row);

  // Clear the input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Event listener to delete a book row when "Clear" button is clicked
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    // Confirm before deleting
    if (confirm('Are you sure you want to delete this book?')) {
      e.target.closest('tr').remove();
    }
  }
});
