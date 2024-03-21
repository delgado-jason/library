

// Sample Books
const identity = new Book('Identity', 'Nora Roberts', 513, true);
const women = new Book('The Woman', 'Kristin Hannah', 389, false);
const dune = new Book('Dune', 'Frank Herbert', 467, true);
const listen = new Book('Listen For The Lie', 'Amy Tintera', 421, true);

const myLibrary = [identity, women, dune, listen];

// Display books
function displayBooks() {
    const booksSection = document.querySelector('.books');

    // Add content to the elements
    // Loop through the library array and display
    for(let i = 0; i < myLibrary.length; i++) {

        // Create the elements
        const bookDiv = document.createElement('div');
        const bookHeaderDiv = document.createElement('div');
        const bookTitleDiv = document.createElement('div');
        const bookAuthorDiv = document.createElement('div');
        const bookSubContentDiv = document.createElement('div');
        const bookPageCountDiv = document.createElement('div');
        const bookHasReadDiv = document.createElement('div');

        // Set classes for the elements
        bookDiv.setAttribute('class', 'book');
        bookHeaderDiv.setAttribute('class', 'book-header');
        bookTitleDiv.setAttribute('class', 'title');
        bookAuthorDiv.setAttribute('class', 'author');
        bookSubContentDiv.setAttribute('class', 'sub-content');
        bookPageCountDiv.setAttribute('class', 'page-count');
        bookHasReadDiv.setAttribute('class', 'read has-read');

        bookTitleDiv.textContent = myLibrary[i].title;
        bookAuthorDiv.textContent = myLibrary[i].author;
        bookHeaderDiv.appendChild(bookTitleDiv);
        bookHeaderDiv.appendChild(bookAuthorDiv);
        bookPageCountDiv.textContent = myLibrary[i].pages;
        bookHasReadDiv.textContent = myLibrary[i].read;
        bookSubContentDiv.appendChild(bookPageCountDiv);
        bookSubContentDiv.appendChild(bookHasReadDiv);

        bookDiv.appendChild(bookHeaderDiv);
        bookDiv.appendChild(bookSubContentDiv);
        booksSection.appendChild(bookDiv);
    }; 
    
}
displayBooks();

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

    const title = prompt("What is the book title?");
    const author = prompt("Who is the author?");
    const pages = prompt("How many pages?");
    const read = prompt("Have you read the book? (true or false)");

    // Create the book
    const book = new Book(title, author, pages, read);

    // Add book to the library
    myLibrary.push(book);

    // Update the front end
    for(let i = 0; i < myLibrary.length; i++){
        createCard(myLibrary[i]);
    }
}

// Create a card for book info
function createCard(book){
    const container = document.querySelector('.books');
    const div = document.createElement('div');
    const header = document.createElement('h3');
    const paraAuth = document.createElement('p');
    const paraPage = document.createElement('p');

    header.textContent = book.title;
    paraAuth.textContent = book.author;
    paraPage.textContent = book.pages;

    div.appendChild(header);
    div.appendChild(paraAuth);
    div.appendChild(paraPage);
    container.appendChild(div);

}

//addBookToLibrary();