var shopping_cart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 25
}

console.log(shopping_cart)

var pen_count = shopping_cart.pen
console.log(pen_count)

var pen_count_2 = shopping_cart["pen"]
console.log("Pen", pen_count_2)

var properties = Object.keys(shopping_cart)
console.log("Properties :", properties)

var properties_values = Object.values(shopping_cart)
console.log("Values: ", properties_values)

var property_name = 'mouse'
var property_value = shopping_cart[property_name]

console.log(property_name, property_value)

shopping_cart.mouse = 15
console.log(shopping_cart)
shopping_cart['mouse'] = 29
console.log(shopping_cart)

var keys =Object.keys(shopping_cart);
for(i=0; i < keys.length; i++){
    var properties_value = shopping_cart[keys[i]]
    console.log(keys[i], properties_value)
}

for(var name in shopping_cart){
    console.log(name)
}

var color = 'yellow'

switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a blue friend')
        break
    case 'white':
        console.log('You are a white friend')
        break
    default:
        console.log('Finish')
}


function movie(){

    return "Din-The day";
  
    return "Poran";
  
    return "Hawa";
  
  }
  
  console.log(movie());
  
  