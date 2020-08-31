"use strict"

// VAR LET CONST

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// testVar();

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a)
//     };
//     console.log(a);
// }

// testLet();

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log(i);

// const colors = [];
// colors.push('red');
// colors.push('blue');

// colors = 'Green';

// console.log(colors);

// CLASS

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password  = password;
    }
    static countUsers(){
        console.log('there are 50 users');
    }
    register(){
        console.log(this.username+ ' is now registered');
    }
}

// let bob = new User('bob', 'bob@gmail.com', '1234');
// bob.register();
// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }
    getPackage(){
        console.log(this.username+ ' is subscribed to the '+ this.package);
    }
}

let mike = new Member('mike', 'mike@gmail.com', '1234', 'standard');

// mike.getPackage();
// mike.register();

// TEMPLATE LITERAL

let name = 'John';

function makeUpperCase(word){
    return word.toUpperCase();
}

let template = 
    `<h1>${makeUpperCase('Hello')} ${name}</h1>
    <p>this is a simple template in javascript</p>`

document.getElementById('template').innerHTML = template;

// NEW STRING & NUMBER METHODS

let theString = 'Hello, my name is Brad and I love javascript';

