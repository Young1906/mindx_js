// A1
const longStr = (arr) => {
    let l = 0;

    for (let s of arr)
        if (s.length > l)
            l = s.length;
    
    return arr.filter((x)=>{return x.length === l});
}

// A1 test
console.log(longStr(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']));


// A2
const alternatingSums = (a) =>{
    let s1 = s2 = 0;
    for (let i = 0; i < a.length; i++)
        if (i % 2 === 0)
            s1+= a[i];
        else 
            s2+= a[i];

    return [s1, s2];
}

// A2 test
console.log(alternatingSums([60, 40, 55, 75, 64]));


// B: code challenge
// save current color
let g_color;

// random color
const randColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // console.log(r,g,b)
    return [r,g,b]
    // return 
}

const randomize_color = () => {
    let [r,g,b] = randColor();
    g_color = [r,g,b];
    let color = "#"+r.toString(16) + g.toString(16) + b.toString(16);
    
    const hexSpan = document.getElementById("hex_color");
    hexSpan.innerText = color;

    // update body color
    document.body.style.backgroundColor = color;
    
    // update grad bar
    const gradBar = document.getElementById("gradient_bar");
    // console.log(gradBar.style)
    gradBar.style.background = `linear-gradient(to right, #ffffff 0%, ${color} 100%)`;

    
}

const copy_to_clip = () => {
    const hexSpan = document.getElementById("hex_color");
    navigator.clipboard.writeText(hexSpan.innerText);

    const msgSpan = document.getElementById("msg");
    const msgDiv = document.getElementById("msg_div")
    
    msgSpan.innerText = "HEX copied to clipboard!"
    msgDiv.style.display = "inherit"

    setTimeout(()=>{
        msgSpan.innerText = "";
        msgDiv.style.display = "none"

    }, 1000)
}

const handleGrad = (e) =>{
    let rect = e.target.getBoundingClientRect();

    // ratio on bar
    let ratio = (e.clientX - rect.left) * 1. / rect.width;
    
    // add just current color according to the gradient
    let [r,g,b] = g_color;

    let new_r = Math.floor (r * ratio + 255 * (1 - ratio));
    let new_g = Math.floor (g * ratio + 255 * (1 - ratio));
    let new_b = Math.floor (b * ratio + 255 * (1 - ratio));

    let color = "#"+new_r.toString(16) + new_g.toString(16) + new_b.toString(16);

    const hexSpan = document.getElementById("hex_color");
    hexSpan.innerText = color;

    // update body color
    document.body.style.backgroundColor = color;

}