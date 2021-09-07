// variable hold value of current counter



// let bIncrease = document.getElementById("b_increase");
// let bDecrease = document.getElementById("b_decrease");


let updateOutput = () => {
    let c = 0;
    let container=document.getElementById("container");
    let output = document.getElementById("current_counter");
    
    container.addEventListener("click", (e)=>{
        if (e.target.id === "b_increase"){
            c++;
            console.log(c);
            output.innerText = c;
        }

        if (e.target.id === "b_decrease"){
            c--;
            console.log(c);
            output.innerText = c;
        }
    })
}


updateOutput();