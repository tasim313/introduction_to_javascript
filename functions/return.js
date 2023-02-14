function add(number1, number2){
    var sum = number1 + number2
    return sum
}

console.log(add(45, 15))


function bringSingara(money){
    var singara_price = 10;
    var quantity = money /singara_price;
    return quantity;
}

var singaras = bringSingara(200);
console.log('Eating singaras: ', singaras)


function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3
    const average = total / 3;
    return average;
}

const assignment1_marks = 60
const assignment2_marks = 45
const assignment3_marks = 50

console.log(getAverage(assignment1_marks, assignment2_marks, assignment3_marks).toFixed(2))