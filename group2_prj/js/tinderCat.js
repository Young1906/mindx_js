let thisCat = null;
let prvCat = null;

// main app
const fetchCat = () => {
    // app mount point
    let container = document.getElementById("app_container");
    
    // Fetch db for imgs of cat
    // fetch("https://sheetdb.io/api/v1/ukowxuqoo8uzb")
    fetch("https://sheetdb.io/api/v1/m2e4rmarwbo15")
        .then(resp=>resp.json())

        // Select a random cat from entire cat list
        .then(cats=> { return cats[Math.floor(Math.random() * cats.length)]})

        // create component
        .then(cat=>showCat(cat))
        .then((cat)=>{thisCat = cat;})
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
    console.log(e.target.id);

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


            console.log(thisCat, prvCat);

    
            // Fetch next Cat
            prvCat = thisCat
            // fetchCat()
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
        r_a: r_a + K*(s_a - e_a),
        r_b: r_b + K*(s_b - e_b)
    }
} 


// Load the first cat
fetchCat()