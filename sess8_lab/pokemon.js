let makeCard = (number, index) => {
    let card = document.createElement("div")
    card.setAttribute("class", "a_card")
    card.setAttribute("value", number)
    card.setAttribute("index", index)
    card.innerText = number
    
    return card
}
let shuffle = (array) => array.sort(() => Math.random() - 0.5);

let game = (min_val, max_val, n_pair) => {
    // root div to hold all the card
    let container = document.getElementById("cards_container");
    
    // arr store array of random pair of number
    let arr = []

    // arr store stage of the card: flip / not flip
    let flipArr = []
    
    arr = []
    flipArr = []
    
    for (let i = 0; i < n_pair; i++){
        let n = Math.floor(Math.random() * (max_val - min_val) + min_val)
        arr.push(n);
        arr.push(n);

    }
    
    // shuffling arr
    arr = shuffle(arr)
    
    // render game initial state
    for (let i = 0; i < arr.length;i++){
        container.appendChild(makeCard('?', i))

        // initially all cards are not flipped
        flipArr.push(false)
    }
    

    // event listener
    let firstClick = true
    let first_val, second_val
    
    //var hold first card and its index
    let firstCard, firstCard_index

    //block click while waiting
    let clickable = true

    // keep track number of pair that is match 
    let n_match = 0;
    container.addEventListener("click", (e)=>{
        // console.log(e.target)
        if (e.target.className=="a_card" && clickable){
            let i = Number(e.target.getAttribute("index"))

            // this is the first flip and the number is not flipped yet
            if (firstClick & !flipArr[i]){
                first_val = arr[i]

                // flip first card
                e.target.innerText = first_val

                // update its stage
                flipArr[i] = !flipArr[i]

                // save first card for later
                firstCard = e.target
                firstCard_index = i;

                
            } 

            // this is the 2nd flip and the number is not flipped yet
            if (!firstClick & !flipArr[i]){
                second_val = arr[i]

                // flip the card
                e.target.innerText = second_val

                // update its stage
                flipArr[i] = !flipArr[i]

                // if match
                if (first_val == second_val) {
                    console.log("match")

                    // turn both card to green
                    firstCard.setAttribute("style","background-color:green")
                    e.target.setAttribute("style","background-color:green")

                    n_match++;

                } else {
                    clickable = false
                    setTimeout(()=>{
                        // flip back
                        firstCard.innerText = "?"
                        flipArr[firstCard_index] = false

                        e.target.innerText = "?"
                        flipArr[i] = false

                        // clickable = true
                        clickable = true
                    }, 2000)
                }
                

                
            }

            firstClick = !firstClick
            // console.log(n_match, n_pair)
            if (n_match === n_pair){
                alert("Win!!!");
                location.reload()
            }
        }
    })
    
    console.log(arr, flipArr);
}

game(1, 100, 50);