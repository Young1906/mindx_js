const container=document.getElementById("list01")

// for (let i = 0; i < 3; i++){
//     container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`)
// }

/*
e1: 
    1-d
    2-a
    3-c
    4-b
*/


// e2
// let i = 0;

// let refreshId = setInterval(
//     function(){
//         container.insertAdjacentHTML(
//             "beforeend",
//             `<li id=ul_li_${i}>${i}</li>`
//         );
//         i++;

//         if (i > 10)
//             clearInterval(refreshId);
//     }
// , 1000)


// e4
const liArr = document.getElementsByTagName("li");

// print first elem
console.log(liArr[0].innerHTML)

// Loop and print all
for (let li of liArr){
    console.log(li.innerText)
}    


// e5
const liClassArr = document.getElementsByClassName("singer");

console.log(liClassArr);
for (let li of liClassArr){
    console.log(li)
}

// e6
// const container_e6 = document.getElementById("ul_e6");
// console.log(container_e6)
// let j = 0;

// setInterval(
//     function(){
//         container_e6.insertAdjacentHTML(
//             "beforeend",
//             `<li id=ul_e6_${j}>${j}</li>`
//         );
//         j++;
//     }, 1000);

// let k = 0;

// setInterval(()=>{
//     setTimeout(()=>{
//         let item = document.getElementById("ul_e6_"+k);
//         item.remove();
//         k++;
//     },3000)
// },500+Math.random() * 2000)

// e7
let i = 0, j = 0;
document.body.addEventListener("click", (e)=>{
    let s1 = document.getElementById("b1_clicked");
    let s2 = document.getElementById("b2_clicked");
    
    // e7.1
    console.log(e.target) // log to console the element was clicked on

    if (e.target.id==="button1"){
        i++;
        s1.innerText=i;
    }

    if (e.target.id==="button2"){
        j++;
        s2.innerText=j + (j%4===0?" harder, daddy!!!":"");
    }
        
})

// e7.2
document.body.addEventListener("keydown",(e)=>{
    console.log(e.key) // log to console the key was pressed
})


// e8
let e8 = ()=>{
    alert("Your name: " + "Tu" +"\nYour wish: " + "Become a rich dev");
}
// e9
let e9 = (uname, wish)=>{
    alert("Your name: " + uname +"\nYour wish: " + wish);
}

// e9("Tu", "Become a dev")


// e10
let e10 = (uname, wish)=>{
    if (wish === undefined){
        wish = "Get rich!!!"
    }

    e9(uname, wish);
    return;
}

// e10("Tu");

// e11
// const e11_container = document.getElementById("e11_container");
// e11_container.addEventListener("click", (e)=>{
//     // e11.1
//     if (e.target.id==="upper")
//         console.log("Upper this!!! just got clicked.")
// })

// e11.2
const e11_button = document.getElementById("upper");

// e11.3
e11_button.addEventListener("click", (e)=>{
    console.log("Upper this!!! clicked.")
    
    // e11.5
    console.log(e11_input.value);

    // e11.6
    let uname_upper=  e11_input.value.toUpperCase();
    console.log(uname_upper);

    // e11.8
    if (uname_upper)
        e11_output.innerText = uname_upper;
    else
        e11_output.innerText = "Result is shown here!!!";
})

// e11.4
const e11_input = document.getElementById("uname");
console.log(e11_input);

// e11.7
const e11_output = document.getElementById("text_output");


// e12
// e12.1
let items = ["Backpack", "MiBand Watch", "Ring"];

// 12.3
let dom_e12 = document.getElementById("e12");
console.log(dom_e12);

// 12.4
for (let li of dom_e12.getElementsByTagName("li")){
    console.log(li)
}

let renderList = () => {
    for (let li_i of dom_e12.getElementsByTagName("li")){
        li_i.remove();
    }
    

    // for (let item of items){
    //     let i = document.createElement("li")
    //     i.innerText = item;
    //     dom_e12.insertAdjacentElement("beforeend", i)
    // }
}

renderList();


// e126
let e12_input = document.getElementById("newItem");
let e12_add = document.getElementById("e12_add");

// e127
e12_add.addEventListener("click", ()=>{
    // e128
    let input = e12_input.value;

    // e129
    if (input)
        items.push(input);

    // e1210
    // clearList();
    renderList();
    console.log(items)
})