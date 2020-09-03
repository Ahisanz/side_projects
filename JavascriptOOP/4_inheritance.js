// Constructor
function Book(title, author, year){
    // console.log('Book Initialized..');
    this.title = title;
    this.author = author;
    this.year = year;   
}

// get summary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// magazine constructor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
// inherit Prototyp
Magazine.prototype = Object.create(Book.prototype);

// instatiate magazine object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);