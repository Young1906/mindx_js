const container = document.getElementById("card_container");
let prvCat = null
let thisCat = null

const fetch_batch = async ()=>{

    let data = await fetch("/cat").then(
        resp => resp.json()
    )
    // Todo: shuffle array

    // Push arr Elem into card container
    while (data.length > 0){
        let cat = data.pop()
        let htmlCard = makeCard(cat)
        container.appendChild(htmlCard)
    }
}

setInterval(()=>{
    if (container.childNodes.length===0){
        fetch_batch()
    }
}, 500)

// Remove the card when vote event happend
container.addEventListener("vote", (e)=>{
    // console.log(e)
    setTimeout(
        ()=>{
            container.removeChild(e.detail.target);
        },
        1000
    )
    thisCat = e.detail

    if (prvCat) {
        // console.log(thisCat, prvCat)
        let data = {
            prvCat: {
                id : prvCat.target.id,
                score: prvCat.score
            },

            thisCat: {
                id : thisCat.target.id,
                score: thisCat.score
            }
        }

        fetch("/cat/elo", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(resp=>console.log(resp.text()))
    }

    // update prvCat
    prvCat = thisCat



})
