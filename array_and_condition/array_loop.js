for(var i=0; i<10; i++){
    console.log(i);
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 100, 101]

for(var i=0; i < numbers[i]; i++){
    console.log(numbers[i])
}


var items = ['bottle', 'mouse', 'sunglass', 'pen']
for (var j=0; j < items.length; j++){
    console.log(items[j])
}

for(var i=1; i <= 20; i++){
    console.log(i);
    if(i > 10){
        break
    }
}

var num = 10;


var side1=9
var side2=8
var side3=9

if(side1 == side2 || side1 == side3 ||side2 == side3){
    console.log("isosceles")
}else{
    console.log("Not isosceles")
}

var i = 0;
for (i=0; i<5; i++){};
console.log(i);


var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue;
  }
  console.log(marks[i]);
};

var i = 5;
for (; i < 5; i++) {
 console.log(i);
}