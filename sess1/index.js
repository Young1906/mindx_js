// [class note] Hello world in JS
console.log("Hello World!!!")

// [class note] Variable
let msg = "This is the C4EJS!!"
console.log(msg);

// [class note]: Escape char \", \', \\
console.log('\': \\\' x is escaped ')

// [class note]: console.log()
console.log(1,2,3,true,false,true*false);

// [class note]: check if input is a number
// console.log(isNaN(Number(prompt())));

// [class note]: prompt;
// let name = prompt("Your name?:")
// console.log(name);

// [quiz 01]
// let n_male = Number(prompt("Numbers of male student(s)"))
// let n_female = Number(prompt("Numbers of female student(s)"))
// let r_male = n_male / (n_male + n_female)
// console.log("% male: " + r_male*100 + "\n% female: " + (1 - r_male)*100);




/* Toy
const form = document.getElementById("form1")
form.onsubmit = function(e) {
    draw(),
    e.preventDefault()
}

function draw(seq_len) {
    console.log("This is called")
    
    // let seq_len = 200
    // direction
    up      = [0, -1]
    down    = [0, 1]
    left    = [-1, 0]
    right   = [1, 0]
    
    let fibs_seqs = fibs(seq_len);
    let step = 5;

    // Drawing the fibonacci seq
    const canvas = document.querySelector('#canvas0');
    const ctx = canvas.getContext('2d');
    
    // set line stroke and line width
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    // center
    let c_pos = [300, 200];

    ctx.moveTo(c_pos[0],c_pos[1]);

    for (i = 0; i < seq_len; i++) {
        let n = fibs_seqs[i];
        // console.log(n);
        let dir = [0, 0];

        if (i%4==0){
            dir = right;
        }

        if (i%4==1){
            dir = up;
        }

        if (i%4==2){
            dir = left;
        }

        if (i%4==3)
            dir = down;

        let _x = n * dir[0]
        let _y = n * dir[1]

        new_pos = [c_pos[0]+_x, c_pos[1]+_y]
        
        ctx.lineTo(new_pos[0],new_pos[1]);
        ctx.stroke()

        
        c_pos = new_pos;
        // console.log(new_pos)
    }
}

function f(x){
    // Fractorial
    if (x == 1) {
        return 1;
    }
    return f(x-1) * x;
}

function fibs(n) {
    if (n == 2) {
        return [0, 1]
    }
    prev = fibs(n - 1)
    // new_elem = prev[prev.length-2] + prev[prev.length-1]
    // new_elem = 
    new_elem = n**1.5;
    // new_elem = parseInt(new_elem);
    prev.push(new_elem)
    return prev;
}
*/