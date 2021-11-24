function sayHello(name){
    console.log('-----------');
    console.log('hello ' + name + '!');
    console.log('-----------');
}
//sayHello();
/*
let a= sayHello;
a();
a();
a();
*/
// sayHello('bob');

function calculateTax(amount){
    let result = amount * 0.092;
    return result;
}

let tax = calculateTax(100);
console.log(tax);



