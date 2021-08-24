/*
Homework 3:
*/

{
    // e1: variable swapping:

    // using sum
    let a = 1, b = 2;
    console.log("Before: (a,b) =", a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After: (a,b) =", a, b);

    // using tmp val
    let tmp;
    console.log("Before: (a,b) = ", a, b);
    tmp = a;
    a = b;
    b = tmp;
    console.log("After: (a,b) = ", a, b);

    // array destructuring
    console.log(a, b);
    [a, b] = [b, a];
    console.log(a, b);

    

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

{
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
}

{
    //e5
    let s = prompt("Input arr")
    let arr = s.split(",")
    // console.log(arr)
    
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum+=Number(arr[i]);
    }

    console.log(sum)
}

{
    //e5
    let s = prompt("Input arr")
    let arr = s.split(",")
    // console.log(arr)
    
    let min = 1e9
    for (let i = 0; i < arr.length; i++){
        let j = Number(arr[i])
        if (min > j)
            min = j
    }

    console.log(min)
}



{
    //e7
    const arr = [1,3,5,7]   
    let i;

    do {
        i = Number(prompt("Search for"))
    } while (isNaN(i))

    let found = false
    for (let j = 0; j < arr.length; j++)
        if (arr[j] === i) {
            console.log("Found at index " + j)
            found = true
        }
    
    if (!found)
        console.log("Not found")
}

{
    //e8.1
    const sheep_size = [1,2,3,4,5]
    console.log(...sheep_size)

    //e8.2
    max_sheep = Math.max(sheep_size)
    console.log("Max sheep", max_sheep)

    //e8.3
    console.log("Max sheep", sheep_size.indexOf(max_sheep))

    //e8.4 + e8.5
    let n_month = 4;

    for (let i = 0; i < n_month; i++){
        //increase sheep size
        for (let j = 0; j < sheep_size.length; j++){
            sheep_size[j] += 50
        }

        console.log("Sheep size after month " + i, ...sheep_size)
    }

    //e8.6
    let total = sheep_size.reduce((a, b)=> a+b, 0);
    console.log("Getting: " + total + " * 25 = " + total* 25 )

}

{
    // e10
    let seq = prompt("Input seq of name")
    let seq2 = seq.split(",").map(x=>"<"+x+">")
    // for (let i = 0; i < seq2.length; i++){
    //     seq2[i] = "<"+seq2[i]+">"
    // }

    console.log(seq + "=>" + seq2.join(","))
}

{
    // e11
    let seq = prompt("Input seq of numbers")
    seq = seq.split(",").map(Number).filter(x => x%2===1)
    console.log(seq)

}