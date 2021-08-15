/*
ex1:
    1.1
    // https://javascript.info/variables#variable-naming
    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.

    Example of variables have invalid names:
    - 1variable : first char is a digit
    - variable^ : contain non alphanumeric letter other than $ and _
    - 0_variable*: violate both

    1.2 Checking datatype of variable
    typeof(variable)

*/
console.log(typeof(1))

// ex3:
    // 3.a 
let msg = "Coding is greate"
console.log(msg)

    // 3.b
let studentCount = 0
console.log(studentCount)

// ex4
    // 4a
msg = "Coding might not be easy, but still great"
console.log(msg)
    // 4b
studentCount = 16
console.log(studentCount)
    // 4c
msg = msg.toLowerCase()
console.log(msg)
    // 4d 
studentCount ++
console.log(studentCount)


// ex5
alert("Have a nice day!!!")

// e6
let uname = prompt("Your name: ")
alert("Hello " + uname + ", have a nice day!!!")

// e7
let fname = prompt("Firstname: ")
let lname = prompt("Lastname: ")
alert("Hello " + fname + " " + lname + ", have a nice day!!!")

// e8
let a = prompt("Square length of size: ")
alert("Square's area: " + a**2);

// e9
let r = prompt("Radius of the circle: ")
alert("Circle's area: " + r**2*3.14159265)

// e10:
let c = prompt("Temperature in Celcius: ")
let f = c*9/5+32
alert(c+"(C)=" + f + "(F)")