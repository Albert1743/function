// let men = ['alibek', 'bexruz', 'jaxongir', 'alsafir']
// let women = ['abdumanon', 'alayor', 'radmir']

// function saySalam(arr) {
//     for(let item of arr) {
//         console.log('Hello ' + item);
//     }
// }

// saySalam(men)
// saySalam(women)



// let user = {
//     name: "Alex",
//     age: 29
// }
// let user_two = {
//     name: "Bob",
//     age: 13
// }
// let user_three = {
//     name: "Michael",
//     age: 25
// }


// function checkUser(user) {
//     if(user.age >= 18) {
//         alert('Welcome ' + user.name);
//     } else {
//         alert('Go away ' + user.name);
//     }
// }

// checkUser(user);
// checkUser(user_two);
// checkUser(user_three);


// 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(number) {
    for (let item of number) {
        console.log('Number ' + item);
    }
}

sum(numbers)


// 2
let num = [19, 32, 13, 43, 23, 53, 76, 54]

function findMaxNumber(max) {
    if (num.length === 0) {
        console.log('Max number: ' + max);
    }
}

findMaxNumber(num)


// 3
let honest = []
function isEven(number) {
    if (number % 2 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

console.log(isEven(8));
console.log(isEven(7));


// 4
function reverseString(String) {
    return String.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));
console.log(reverseString("Hello, World!"));
console.log(reverseString("My name is Alex"));


// 5 
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min));
}

console.log(RandomNumber(1, 10))


// 6 
function countNumber(str) {
    let num = "My name is Alibek"
    let count = 0

    for (let item of str) {
        if (num.includes(item)) {
            count++;
        }
    }
    return count;
}

console.log(countNumber("How are you?"));


// 7
function isPalindrome(String) {
    let reverseString = String.split("").reverse().join("");
    return inputString === reverseString;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello")); 

