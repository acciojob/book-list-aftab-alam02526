//your JS code here. If required.
 // Get references to form elements
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const submitBtn = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    // Add book event
    submitBtn.addEventListener('click', function() {
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const isbn = isbnInput.value.trim();

      // Validate inputs
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

      // Append row to the table
      bookList.appendChild(row);

      // Clear input fields
      titleInput.value = '';
      authorInput.value = '';
      isbnInput.value = '';
    });

    // Delete book event
    bookList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
          e.target.closest('tr').remove();
        }
      }
    });