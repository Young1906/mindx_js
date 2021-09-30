let thisCat = null;
let prvCat = null;

const URL_DB = "http://localhost:5000/cat";

// main app
const fetchCat = async () => {
    // app mount point
    let container = document.getElementById("app_container");
    
    // Fetch db for imgs of cat
    // fetch("https://sheetdb.io/api/v1/ukowxuqoo8uzb")
    fetch(
            URL_DB,
            {
                method:"GET",
                mode:"no-cors",
                headers:{"Content-Type": "application/json"}
            })
        .then(resp=>console.log(resp.json()))

        // // Select a random cat from entire cat list
        // .then(cats=> { return cats[Math.floor(Math.random() * cats.length)]})

        // // create component
        // .then(cat=>showCat(cat))
        // .then((cat)=>{
        //     thisCat = cat;
        //     thisCat.view = thisCat.view*1.0 + 1;
        // })
}



const showCat = (cat) => {
    let img = document.getElementById("cat_img");
    img.setAttribute("src", "assets/imgs/"+cat.img_name)
    
    let catName = document.getElementById("cat_name");
    catName.innerText = cat.cat_name;
        
    let rating = document.getElementById("cat_rating");
    rating.innerText = cat.rating;

    let catDesc = document.getElementById("cat_desc");
    catDesc.innerText = cat.description.length < 90 ? cat.description : cat.description.substring(0, 90) + '...';
    des = cat.description;

    return cat;
}

let toggled = true;
const toggleExpand = () => {
    // on click, reduce img height to 20%, extend full cat description
    
    let img_ctn = document.getElementById("img_container");
    img_ctn.style.height = toggled ? '20%' : '70%';
    
    let catDesc = document.getElementById("cat_desc");
    catDesc.innerText = toggled ? thisCat.description : thisCat.description.substr(0, 90) + '...';
    toggled = !toggled;

}

const handleVote = (e) => {
    // update rating base on thisCat vs prvCat
    // console.log(e.target.id);
    

    if (["btn_dislike","btn_like","btn_superlike"].indexOf(e.target))
        {
            thisCat.votedScore = e.target.getAttribute("score") * 1.;

            if (prvCat === null)
                prvCat = thisCat;

            // asign score for each cat;
            switch (true) {
                case (thisCat.votedScore > prvCat.votedScore):
                    thisCat.s = 1;
                    prvCat.s = 0;
                    break;
                

                case (thisCat.votedScore === prvCat.votedScore):
                    thisCat.s = 0.5;
                    prvCat.s = 0.5;
                    break;
                
                case (thisCat.votedScore < prvCat.votedScore):
                    thisCat.s = 0;
                    prvCat.s = 1;
                    break;

            }
            
            let newScore = eloScore(thisCat.rating * 1., thisCat.s, prvCat.rating * 1., prvCat.s);
            thisCat.rating = newScore.r_a;
            prvCat.rating = newScore.r_b;


            // update dislike, like, superlike for thisCat
            switch (thisCat.votedScore) {
                case 0:
                    thisCat.dislike = thisCat.dislike * 1 + 1;
                case 1:
                    thisCat.like = thisCat.like * 1 + 1;
                case 2:
                    thisCat.superlike = thisCat.superlike * 1 + 1;
            }

            // thisCat.dislike = thisCat.dislike * 1. + thisCat.votedScore == 0 ? 1 : 0;
            // thisCat.like = thisCat.like * 1. + thisCat.votedScore == 1 ? 1 : 0;
            // thisCat.superlike = thisCat.superlike * 1. + thisCat.votedScore == 2 ? 1 : 0;

            let {s, votedScore, id, ...toPut } = thisCat; 
            fetch(URL_DB+"/id/"+thisCat.id, {
                method:  "PUT",
                headers: {
                    "Content-Type":"application/json"
                }, 
                body: JSON.stringify(toPut)
            })
            
            let{ _s, _votedScore, _id, ..._toPut } = prvCat
            fetch(URL_DB+"/id/"+prvCat.id, {
                method:  "PUT",
                headers: {
                    "Content-Type":"application/json"
                }, 
                body: JSON.stringify(_toPut)
            })

            // Fetch next Cat
            prvCat = thisCat
            fetchCat()
        }   
}

// Elo score
const eloScore = (r_a, s_a, r_b, s_b) => {
    /*
        r_a, r_b: rating of player a and b; in this case: the rating of current cat and prv cat
        s_a, s_b: s_a = 1 if votedScore of this cat >= prev cat, 0.5 if eq, else 0
    */
    const K=16;

    // Expected score of player A & B
    let e_a = 1.0 / (1 + Math.pow(10, (r_b - r_a)*1.0/400));
    let e_b = 1.0 / (1 + Math.pow(10, (r_a - r_b)*1.0/400));

    return {
        r_a: Math.floor(r_a + K*(s_a - e_a)),
        r_b: Math.floor(r_b + K*(s_b - e_b))
    }
} 


// Load the first cat
fetchCat()


const makeCard = (cat) => {
    let rootDiv = document.createElement("div");
    rootDiv.setAttribute("class", card);

    rootDiv.innerHTML = `
    <!-- Cat Img -->
    <div class=img_container id=img_container>
        <img id=cat_img src="">
    </div>
    
    <!-- Button div -->
    <div class=btn_container onclick="handleVote(event)">
        <div class="btn dislike" score=0 id=btn_dislike>
            <span class="material-icons dislike" score=0 id=btn_dislike>
                close
            </span>
        </div>
        
        <div class="btn like" score=1 id=btn_like>  
            <span class="material-icons" score=1 id=btn_like>
                favorite
            </span>
        </div>

        <div class="btn superlike" score=2 id=btn_superlike>
            <span class="material-icons superlike" score=2 id=btn_superlike>
                star
            </span>                        
        </div>
    </div>
    
    <!-- Decription and rating -->
    <div class=des_container>
        <!-- name and rating -->
        <div class=name_rating>
            <span id=cat_name></span>
            <span id=cat_rating></span>
        </div>
        
        <!-- description -->
        <div class=description>
            <span id="cat_desc" onclick="toggleExpand()"></span>
        </div>
    </div>
    `

    let img = rootDiv.getElementById("cat_img");
    img.setAttribute("src", "assets/imgs/"+cat.img_name)
    
    let catName = rootDiv.getElementById("cat_name");
    catName.innerText = cat.cat_name;
        
    let rating = rootDiv.getElementById("cat_rating");
    rating.innerText = cat.rating;

    let catDesc = rootDiv.getElementById("cat_desc");
    catDesc.innerText = cat.description.length < 90 ? cat.description : cat.description.substring(0, 90) + '...';
    des = cat.description;

    return rootDiv;

}