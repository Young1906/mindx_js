const countEvenNumber = (...args) => {
    let n = 0;
    for (let i = 0; i < args.length; i++){
        if (args[i] % 2=== 0)
            n+=1;
    }

    return n;
}

// console.log(countEvenNumber(1,2,3,4,5))


// let input1 = document.createElement("input")
// let input2 = document.createElement("input")

// input1.type="text"
// input2.type="date"
// input1.id = "input1"

// console.log(input1)
// document.body.appendChild(input1)
// document.body.appendChild(input2)


let b = document.getElementById("button1");
let i1 = document.getElementById("input1");
let i2 = document.getElementById("input2");
// let ps = document.getElementsByTagName("p");

b.addEventListener("click", ()=>{
    
    let a, b; 
    a = Number(i1.value);
    b = Number(i2.value);

    if (a && b)
        p.innerText = a + b
})

let ps = document.getElementsByTagName("p")

for (let p of ps){
    p.addEventListener("mouseover", ()=>{
        p.setAttribute("style", "background-color:yellow")
    })
    
    p.addEventListener("mouseout", ()=>{
        p.setAttribute("style", "background-color:white")
    })
}

