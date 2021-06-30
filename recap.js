let x = 12.0;
let y = 3.0;

// x = "Zandra";

// console.log("My message");

// console.log(x);

// option 2 is less preferred because not as readable in complex statements
// console.log(`Value of x : ${x}`);
// console.log("Value of x :" + x);

// console.log(`Value of x : ${x}, Value of y : ${y}, and ${x}/${y} = ${x/y}`);
// console.log("Value of x : " + x + ", Value of y :" + y + ", and " + x + "/" + y + "=", + (x/y));

// let age = 19;
// if (age > 18) {/
//    console.log("You can vote!");
// } else {
//     console.log("You cannot vote right now.");
// }

function print_sum(a,b) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);

    console.log(`a + b: ${a + b}`);
}

print_sum(2,3)

function add(a,b) {
    return a + b;
}

var sum = add(2,3);

console.log(`Sum: ${sum}`);

var function_to_print_sum = function (a,b) {
    console.log("a + b " + (a+b));
};

console.log(function_to_print_sum);

function_to_print_sum(4,4);

function print_after_operation(a, b, operation) {
    var result = operation(a,b);
    console.log("Result: " + result);
}

function add(a,b) {
    return a + b;
}

function product(a,b){
    return a * b;
}

print_after_operation(3, 4, add);
print_after_operation(3, 4, product);
print_after_operation(3, 4, (a, b) => {
    return a - b;
});

