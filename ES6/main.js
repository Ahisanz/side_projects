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

// startWith()
// endsWith()
// includes()

// console.log(theString.startsWith('Hello'));
// console.log(theString.includes('love'));
// console.log(theString.endsWith('Hello'));

// Hex
// console.log(0xff);
// binary
// console.log(0b1011);
// octal
// console.log(0o543);

// console.log(Number.isFinite(3));
// console.log(Number.isNaN('string'));
// console.log(Number.isInteger(Infinity));

function greet($greeting  = 'Hello world'){
    console.log($greeting)
}

// greet();

let args1 = [1,2,3];
let args2 = [4,5,6];
function test(){
    console.log(args1+','+args2);
}
// test.apply(null,args);
// test(...args1,...args2);

var myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a:1, b:2});
mySet.delete(22);
mySet.clear();
mySet.add('100');
mySet.add('200');

// console.log(mySet.size);
// mySet.forEach(function(val){
//     console.log(val);
// });

let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3','Foo');
myMap.delete('a1');
// console.log(myMap);

let carWeakSet = new WeakSet();
let car1 = {
    make: 'Honda',
    model: 'civic'
}
let car2 = {
    make: 'Toyota',
    model: 'camry'
}

carWeakSet.add(car2);
carWeakSet.delete(car1);

// console.log(carWeakSet);

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
};

let key2 = {
    id: 2
};

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);
// console.log(carWeakMap);

// () => {}

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    
    return arr.map((x) => {
        console.log(this.prefix + x)
    });
}

let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);

let add = (a,b) => {
    let sum = a+b;
    console.log(sum);
    return false;
}

// add(10,2);

// Immediatley Resolved

// var myPromise = Promise.resolve('Foo');

// myPromise.then((res) => console.log(res));

var myPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000)
})

myPromise.then((res) => {
    res += 3;
    // console.log(res);
})

function getData(method, url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else {
                reject({
                    status: this.status,
                    satatusText: xhr.statusText
                })
            }
        }
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
        });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
    // console.log(data);
    let todos = JSON.parse(data);
    let output = '';
    for(let todo of todos){
        output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
        </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch(function(err){
    console.log(err);
});

function *g1(){
    console.log('Hello');
    yield 'Yield 1 ran..';
    console.log('World');
    yield 'Yield 2 ran...';
    return 'Returned...';
}

var g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for(let val of g){
    console.log(val);
}