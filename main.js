

// Sample Books
const identity = new Book('Identity', 'Nora Roberts', 513, true);
const women = new Book('The Woman', 'Kristin Hannah', 389, false);
const dune = new Book('Dune', 'Frank Herbert', 467, true);
const listen = new Book('Listen For The Lie', 'Amy Tintera', 421, true);

const myLibrary = [identity, women, dune, listen];

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