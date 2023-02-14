var num1 = 56;
var num2 = 89;

console.log(num1 < num2)
console.log(num1 > num2)
console.log( num1 == num2)
console.log(num1 === num2)


var iphone_price = 80000;
var my_budget = 9500;


if (iphone_price > my_budget){
    console.log("I phone kine futani marbo")
}

var chicken_price = 500;
var my_money = 50;

if (chicken_price <= my_money){
    console.log("Murgir raan khamu and haddi chibamu")
}
if(chicken_price > my_money){
    console.log("Smashed potato and lentils soup")
}


if (chicken_price < my_money){
    console.log('I will eat  Chicken')
}
else{
    console.log("I will eat potato")
}

var is_graduated = true
var salary = 25000
var car = 0
if (is_graduated == true && salary>50000 && car>=1){
    console.log('Eso biye kore feli')
}
else{
    console.log('Tor kopale Biye nai')
}


var my_money = 2
var danish_price = 45
var better_bread = 35
var toast_biscuit = 20

if(danish_price < my_money){
    console.log('Dan Dan Danish khamu')
}
else if(better_bread < my_money){
    console.log('Butter bon khamu')
}
else if(toast_biscuit < my_money){
    console.log("toast biscuit khamu")
}
else{
    console.log("Kisu khamu na")
}


var math = true
var geometry = true
var straight_lint = true

if(math == true){
    if(geometry == true){
        if(straight_lint == true){
        }else{
        }
    }else{
    }
}

var destinations = ["sajek", "coxsbazar", "nepal", "bali", "sp"]


var fruits = ['Apple', 'Banana', 'Orange']

var index_of_banana = fruits.indexOf('Banana')
console.log(index_of_banana)

fruits[1]='Mango'
console.log(fruits)

fruits.pop('Orange')
console.log(fruits)
fruits.push('Watermelon')
console.log(fruits)


var grade = 56;

if(grade >=80){
    console.log("A grade")
}else if(grade >=60 && grade<80){
  console.log("B grade")
}else if(grade >=50 && grade<60){
    console.log("C grade")
}else if(grade >=40 && grade<50){
    console.log("D grade")
}else{
    console.log("F grade")
}

var number1 = 13
var number2 = 79
var number3 = 45

if (number1> number2){
    if(number1>number3){
        console.log("Number One is big number")
    }else{
        console.log("Number Three is big number")
    }
}else if(number2>number3){
    console.log("Number Two is big number")
}else{
    console.log("Number Three is big number")
}


let x = 5;
let y = 10;
if (x < y) {
 console.log("x is less than y");
} else {
 console.log("x is greater than or equal to y");
}

console.log(6 != 6)

 console.log(6 >= 6)

 for(var roast_given= 0; roast_given < 7; roast_given++){
    console.log("Roast Den")
 }