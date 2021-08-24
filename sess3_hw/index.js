/*
Homework 3:
*/

{
    // e1: variable swapping:

    // using sum
    let a = 1, b = 2;
    console.log("Before: (a,b) =", a, b)
    a = a+b;
    b = a - b;
    a = a - b;
    console.log("After: (a,b) =", a, b)

    // using tmp val
    let tmp 
    console.log("Before: (a,b) = ", a, b)
    tmp = a
    a = b;
    b = tmp;
    console.log("After: (a,b) = ", a, b)

    // array destructuring
    console.log(a, b)
    [a, b] = [b, a]
    console.log(a, b)

    

}

{
    // e2
    const s = "Hello world"
    let a = s.split(" ")
    console.log(a)
}

{
    // e3
    const arr=[1,2,3]
    console.log(...arr)
}

function crud(){
    // e4
    let actions="c r u d q".split(" ")
    let data=[]
    //input
    let c;

    do {
        c = prompt("Input action (C/R/U/D/Q), q=quit")
    } while (!actions.includes(c))

    switch (c){
        case "c":
            {
                let item = prompt("Item to create:");
                data.push(item);
                pretty_print(data);
                crud()
                break;
            }
            

        case "r": 
            {
                pretty_print(data);
                crud()
                break;
            }
            
        case "u":
            {
                if (data.length === 0){
                    console.log("Nothing to update");
                    break;
                }
                pretty_print(data);
                
                let i;

                do {
                    i = Number(prompt("Item to update"))
                    i--
                } while( isNaN(i) || i < 0 || i >= data.length)

                data[i] = prompt("Change item to")
                pretty_print(data)
                crud()
            }
            

        case "d":
            {
                if (data.length === 0){
                    console.log("Nothing to delete");
                    break;
                }
    
                let i;
    
                do {
                    i = Number(prompt("Item to delete"))
                    i--
                } while( isNaN(i) || i < 0 || i >= data.length)
    
                data.splice(i, 1)
                crud()

            }
        case "q":
            break 
            
    }

    function pretty_print(data){
        for (let i = 0; i < data.length; i++)
            console.log(i+1 + ". "+data[i])
    }
}

crud()