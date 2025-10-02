//your JS code here. If required.
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

      // Create a new row
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
      `;

      // Append row to table
      bookList.appendChild(row);

      // Clear input fields
      titleInput.value = '';
      authorInput.value = '';
      isbnInput.value = '';
    }

    // Event listener for submit button
    submitBtn.addEventListener('click', addBook);
	e.preventDefault(); 
	  addBook();
    // Event delegation for deleting a book
    bookList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        const row = e.target.closest('tr');
        row.remove();
      }
    });
