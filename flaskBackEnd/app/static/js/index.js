const container = document.getElementById("card_container");

// Remove the card when vote event happend
container.addEventListener("vote", (e)=>{
    // console.log(e)
    setTimeout(
        ()=>{
            console.log("remove element" + e.detail.target);
            container.removeChild(e.detail.target);
        },
        1000
    )

})

const fetch_batch = () => {
    let data = [
        {
            id:1,
            cat_name:"Catty Mc Flatface",
            description:"Very Catty",
            rating: 1000,
            img_path: "/static/imgs/img.jpeg"
        },

        {
            id:2,
            cat_name:"Catty Mc Flatface",
            description:"Very Catty",
            rating: 1000,
            img_path: "/static/imgs/img.jpeg"
        },

        {
            id:3,
            cat_name:"Catty Mc Flatface",
            description:"Very Catty",
            rating: 1000,
            img_path: "/static/imgs/img.jpeg"
        }

    ]

    let i = 0;

    while (data.length > 0){
        let cat = data.pop()
        let htmlCard = makeCard(cat)
        htmlCard.setAttribute("style","z-index:"+i)
        container.appendChild(htmlCard)
        i++;
    }

    // when container out of card, fetch new
}


setInterval(()=>{
    if (container.childNodes.length===0)
        fetch_batch()
}, 1000)
