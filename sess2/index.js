
let arr = ["Fight club", "Shawshank Redemption"];
arr.push(prompt("Movie's name:"));
console.log(arr)

{
    let i;

    do {
        i = Number(prompt("Input a number"))
    } while (isNaN(i) || i >= arr.length|| i < 0);
    console.log(arr[i]);
    arr[0] = prompt("Input movie name:");
}



{
    let i;

    do {
        i = Number(prompt("Input a number"))
    } while (isNaN(i) || i >= arr.length || i < 0);

    arr[i] = prompt("Input a movie name")
    console.log(arr)
}

{
    let i;

    do {
        i = Number(prompt("Input a number"))
    } while (isNaN(i) || i >= arr.length|| i < 0);

    arr.splice(i, 1);
    console.log(arr)
}

{
    let i, n;

    do {
        i = Number(prompt("Input a number"))
    } while (isNaN(i) || i >= arr.length|| i < 0);

    // let i, n;

    do {
        n = Number(prompt("Input a number"))
    } while (isNaN(n) || i >= arr.length|| i < 0);

    arr.splice(i, n);
    console.log(arr)
}

{
    let arr2 = ["Batman", "Up", "Attack on titans", "My boss my hero"];
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
}

{
    let arr2 = ["Batman", "Up", "Attack on titans", "My boss my hero"];
    for (let i = 0; i < arr2.length; i++) {
        if (i < arr.length / 2)
            console.log(arr2[i]);
    }
}

{
    let arr2 = ["Batman", "Up", "Attack on titans", "My boss my hero"];
    for (let i = 0; i < arr2.length; i++) {
            console.log(i + "." + arr2[i]);
    }
}

{
    let arr2 = ["Batman", "Up", "Attack on titans", "My boss my hero"];
    for (let i = 0; i < arr.length; i++)
        arr2[i] = arr2[i].toLowerCase()

}

{
    let uname;
    do {
        uname = prompt("Enter username:");
        if (uname.length > 15)
            console.log("Too long username!")
    } while (!uname || uname.length > 15)
}

{
    let choices = ["None", "4 legs", "8 legs", "12 legs" ]
    
    for (let i = 1; i <= choices.length; i++){
        
        console.log(i+"."+choices[i-1]);
    }

    let answer;
    
    while (true) {
        answer = Number(prompt("Input ur answer"));

        if (isNaN(answer))
        {
            console.log("Invalid answer")
            continue
        }
        
        if (answer < 1 || answer > 4){
            console.log("Invalid answer")
            continue
        }
            
        break
    }

    if (answer === 3)
        console.log("Correct")
    else 
    console.log("Incorrect")

}