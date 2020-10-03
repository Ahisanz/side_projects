// 1 : reverse a string
// return a string in reverse 
// ex.reverseString('hello') === 'olleh';

function reverseString(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    //  second chance
    // let revString = '';
    // for(let i = str.lenght - 1; i >= 0; i--){
    //     revString = revString + str[i];
    // }
    // return revString;

    // tird chance
    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;
    // forth
    // let revString = '';
    // str.split('').forEach(char => revString = char + revString)

    // return revString;
    // fifth
    return str.split('').reduce((revString, char) => char + revString, '')
}


//  2 : Validate a Palindrome
// return true if palidrome and false if not
// 

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;

}

// 
// 
function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}

// 
// 

function capitalizeLetters(str) {
    // const strArray = str.toLowerCase().split(' ');

    // for(let i = 0; i < strArray.length; i++) {
    //     strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    // }

    // return strArray.join(' ');

    // 
    // 

    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substr(1))
    //     .join(' ');

    // 
    // 
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    })
}

// 
// 
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })
    for(let char in charMap){
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// 
// 

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz')
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        } else if( i % 5 === 0){
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}

// 
// longest word
function longestWord(sen){
    // create filtered array
    const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sort by lenght
    const sorted = wordArray.sort((a, b) => b.length - a.length);

    // if multiple word
    const longestWordArray = sorted.filter(word => word.length === sorted[0].length)
    // check if more than one array value
    if(longestWordArray.length === 1) {
        return longestWordArray[0];
    } else {
        return longestWordArray;
    }
}

// array chunking
// 
function chunkArray(arr, len) {
    // init chunked array
    // const chunkArr = [];
    // let i = 0;

    // while(i < arr.length){
    //     // slice out from the index to the index plus the chunk length 
    //     chunkArr.push(arr.slice(i, i + len));

    //     i += len;
    // }
    // return chunkArr;

    // 
    // 
    const chunkArr = [];
    arr.forEach(val => {
        const last = chunkArr[chunkArr.length - 1];

        if( !last || last.length === len) {
            chunkArr.push([val])
        } else {
            last.push(val);
        }
    })
    return chunkArr;
}

// 
// 
function flattenArray(arrays){
    // return arrays.reduce(function(a, b){
    //     return a.concat(b);
    // })

    // return [].concat.apply([], arrays);

    return [].concat(...arrays);
}

// 
// 
function isAnagram(str1, str2){
    return formatstr(str1) === formatstr(str2);
}

// accept only letters, lower case all, separate the letters, sort from a->z and join.

function formatstr(str){
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

// 
// 
function letterChange(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
        if(char === 'z' || char === 'Z'){
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1 );
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    })

    return newStr
}
// 
//  sum all number args
function addAll(...numbers) {
    // var args = Array.prototype.slice.call(arguments);

    // var total = 0;

    // for( let i = 0 ; i < args.length ; i++) {
    //     total += args[i];
    // }
    
    // return total

    // modern
    // let total  = 0 ;
    // numbers.forEach(num => total += num)
    // return total;


    return numbers.reduce((acc, cur) => acc + cur)

}

// 
// 

function sumAllPrimes(num) {
    let total = 0;

    function checkForPrime(i){
        for(let j = 2; j < i; j++){
            if( i % j === 0){
                return false
            }
        }
        return true;
    }

    for(let i  = 2; i <= num ; i++){
        if(checkForPrime(i)){
            total += i
        }
    }
    return total
}
// 
// 
function seekAndDestroy(arr, ...rest){
    // const args = Array.from(arguments);

    // function filterArray(arr) {
    //     return args.indexOf(arr) === - 1;
    // }

    // return arr.filter(filterArray)

    //  ...rest, filter, include
    return arr.filter(val => !rest.includes(val));
}
// 
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach((val, i) => {
        // if(val === -1){
        //     arr1.push(i);
        // } else{
        //     arr2.push(val);
        // }
        val === -1 ? arr1.push(i) : arr2.push(val)
    });

    const sortArr = arr2.sort((a, b) =>  a - b);

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;

}

// 
// 
function missingLetters(str){
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare){
            ++compare
        } else {
            missing = String.fromCharCode(compare)
        }
    });
    return missing;
}
// 
// 
function evenOddSum(arr){
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0) ? (evenSum += num) : (oddSum += num));

    return [evenSum, oddSum];
}


const output = evenOddSum([50, 60, 60, 45, 71]);

console.log(output);