let initKeyboard = ()=>{
    let appContainer = document.getElementById("cal");
    let appKeyboard = document.getElementById("cal_keyboard");
    let appScreen = document.getElementById("cal_screen");
    
    
    // let btn_i = makeNumberBtn(1);
    // appKeyboard.append(btn_i);


    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let n of numbers) {
        appKeyboard.append(makeNumberBtn(n))
    }
    
    
    let ops = ["+", "-", "*", "%"]
    for (let n of ops) 
        appKeyboard.append(makeOpsBtn(n))
}

let makeNumberBtn = (n) => {
    let btn = document.createElement("div")
    btn.setAttribute("class", "cal_button")
    btn.innerText = n;
    return btn
}


let makeOpsBtn = (op) => {
    let btn = makeNumberBtn(op)
    btn.setAttribute("class","cal_button opsBtn")
    return btn
}


initKeyboard();