/*
Ex1: 
    1. What are the var and const in Javascript
    - var is the keyword to declare a variable in javascript
    - const is the keyword to declare constant, at declaration, a value must be assigned to this constant

    2. var is function-scoped while let is block-scope,
    which mean:
    - if a variable is declared by var within a function
    we can't access that variable out side that function.
    
    - block scope mean if a variable declared by let between a pair 
    of {}, that variable can't be access out side that pair of
    {}.

    3.
    - let: value can be updated within its scope.
    - const: value can't be updated, must be provided 
    at declaration

Ex2: 
    Boolean is a datatype descible logical value, which mean
    it consist of 2 values {true, false}

    what result in boolean:
    - logical operator over boolean value 
    - comparison operator 

*/

// ex3: 
// 3.a
for (let i = 0; i < 7; i++) {
    console.log(i);
}

function read_number(msg){
    let n;
    do {
        n = Number(prompt(msg))
    } while (isNaN(n))

    return n;
}

// 3.b
{
    let N = read_number("(3b) Input a number:");
    for (let i = 0; i < N; i++) {
        console.log(i)
    }
}

// 3.c
{
    let N = read_number("(3c) Input a number:");
    
    while (N < 3) {
        N = read_number("(3c) Input a number (>=3):")
    }
    
    for (let i = 3; i < N; i++) {
        console.log(i)
    }
}

// 3.d
{
    let c, n;

    c = read_number("(3d) Input start:");
    n = read_number("(3e) Input end:")

    for (let i = c; i < n; i++) {
        console.log(i);
    }
}

// 3.e
{
    let c, n;
    let step = 3

    c = read_number("(3e) Input start:");
    n = read_number("(3e) Input end:")

    for (let i = c; i < n; i+=step) {
        console.log(i);
    }
}

// 3.f 
{
    let c, n, s;

    c = read_number("(3f) Input start:");
    n = read_number("(3f) Input end:");
    s = read_number("(3f) Input step size:");

    for (let i = c; i < n; i+=s) {
        console.log(i);
    }
}




// ex4
{
    let n = read_number("(4) Input n");
    let p = 1;
    for (let i = 1; i <= n; i++){
        p*=i;
    }

    console.log("f("+n+")="+p)
}

// ex5
{
    let age = read_number("(5) Input your ages:");
    if (age < 14) {
        alert("Your're too young for this content!!")
    } else {
        alert("OK")
    }
}

// ex6
{
    let n = read_number("(6) Input a number [0-9]");

    while ((n < 0) | (n > 9)) {
        n = read_number("(6) Input a number [0-9]");
    }

    if (n > 4) {
        console.log("Higher half of 9");
    } else {
        console.log("Lower half of 9");
    }
}

// ex7
{
    let x = read_number("(7) Input a positive number");
    let n;
    
    while (x < 0)
        x = read_number("(7) Input a positive number")
    
    // hoisting n?
    n = read_number("(7) Input a number [0-"+x+"]");
    
    while ((n < 0) | (n > x)){
        n = read_number("(7) Input a number [0-"+x+"]");
    }

    if (n > x/2){
        console.log("Higher half of "+x);
    } else {
        console.log("Lower half of "+x);
    }
}

// ex8
{
    let x = read_number("Input x: ");
    if(x%2===0)
        alert(x+" is a even number")
    else
    alert(x+" is a odd number")

}

// ex9
// ex9.a
{
    for (let i = 0; i < 3; i++)
        console.log("L");
    for (let i = 0; i < 3; i++)
        console.log("H");
}

// 9.b
{
    let n = read_number("(9b) Input number");

    for (let i = 1; i <= n; i++){
        if (i <= n/2)
            console.log("L")
        else  
            console.log("H")
    }
}

// 9.c
{
    let n = 8;

    for (let i = 0; i < n; i++){
        console.log(i%2);
    }
}

// 9.d
{
    let n = read_number("(9d) Input a number");

    for (let i = 0; i < n; i++){
        console.log(i%2);
    }
}

// 10
{
    // weight
    let w = read_number("Weight in kg");
    let h = read_number("Height in cm");

    let bmi = w / (h/100)**2;

    switch (true) {
        case bmi < 16:
            alert("Severely underweight");
            break;
        case bmi < 18.5:
            alert("Underweight");
            break;
        case bmi < 25:
            alert("Normal");
            break;
        case bmi < 30:
            alert("Overweight");
            break;
        default:
            alert("Obese");
            break;
    } 

}