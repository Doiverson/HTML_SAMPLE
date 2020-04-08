
//変数

// var number = 12.5;
const a = 12.5;
let b = 12.5;

// a = 10;
b = 10;

console.log("a"+a);
console.log("a"+b);

// 配列
let array = [
    ["apple", "orange", "strawberry"],
    ["apple", "orange", "strawberry"],
    ["apple", "orange", "strawberry"],
    ["apple", "orange", "strawberry"],
    ["apple", "orange", "strawberry"],
];

for (let a = 0; a < array.length; a++) {
    for (let b = 0; b < array[a].length; b++) {
        console.log(array[a][b]);
    }
}

// 条件分岐
const num1 = 10;
const num2 = 20;

if (num1 > num2) {
    console.log("The biggest number is "+num1);
} else {
    console.log("The biggest number is "+num2);
}

//DOM
const elem = document.getElementsByTagName("span");
console.log(elem[0].offsetHeight);
