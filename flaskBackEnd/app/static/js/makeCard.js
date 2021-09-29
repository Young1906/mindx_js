const makeCard = (cat) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    card.innerHTML = `
    <!-- Cat Img -->
<div class=img_container>
    <img class=cat_image src="">
</div>

<!-- Button div -->
<div class=btn_container>
    <div class="btn dislike">
        <span class="material-icons dislike">
            close
        </span>
    </div>

    <div class="btn like">
        <span class="material-icons like" score=1 class=btn_like>
            favorite
        </span>
    </div>

    <div class="btn superlike" score=2 class=btn_superlike>
        <span class="material-icons superlike" score=2 class=btn_superlike>
            star
        </span>
    </div>
</div>

<!-- Decription and rating -->
<div class=des_container>
    <!-- name and rating -->
    <div class=name_rating>
        <span class=cat_name></span>
        <span class=cat_rating></span>
    </div>

    <!-- description -->
    <div class=description>
        <span class="cat_desc"></span>
    </div>
</div>
    `

    // div id for card
    card.id = cat.id

    let img = card.getElementsByClassName("cat_image")[0];
    img.setAttribute("src", cat.img_path)

    let catName = card.getElementsByClassName("cat_name")[0];
    catName.innerText = cat.cat_name;

    let rating = card.getElementsByClassName("cat_rating")[0];
    rating.innerText = cat.rating;

    let catDesc = card.getElementsByClassName("cat_desc")[0];
    catDesc.innerText = cat.description.length < 90 ? cat.description : cat.description.substring(0, 90) + '...';
    des = cat.description;



    // const eventVote = new Event("vote")
    const voteEvent = new CustomEvent("vote", {bubbles: true, detail: {target: card}})

    card.addEventListener("click", (e)=>{
        const target = e.target;

        if (target.classList.contains("dislike")){
            card.classList.add("left");
            // const eventDislike = new CustomEvent("vote", {"target_id": card});
            card.dispatchEvent(voteEvent)
        }

        if (target.classList.contains("like")){
            card.classList.add("right");
            card.dispatchEvent(voteEvent)
        }

        if (target.classList.contains("superlike")){
            card.classList.add("up");
            card.dispatchEvent(voteEvent)
        }

        if (target.classList.contains("description") || target.classList.contains("cat_desc")){
            console.log("This")
            img_ctn = card.getElementsByClassName("img_container")[0];

            if (img_ctn.classList.contains("minimized"))
                img_ctn.classList.remove("minimized")
            else {
                img_ctn.classList.add("minimized")
            }
        }
    })
    return card;
};
