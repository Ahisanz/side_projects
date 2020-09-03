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

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

// instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);
book2.revise('2018');
console.log(book2)