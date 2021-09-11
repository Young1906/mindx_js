const handleUser = (users, n) => {
    if (n)
        users = users.slice(0, n);
    let container = document.getElementById("userlist");
    let i = 0;
    console.log(users[0])
    for (let u of users) {
        u = flattenJSON(u)
        if (i === 0) {
            // adding header
            i++;
            
            let tr = document.createElement("tr");
            for (let c of Object.keys(u)) {
                let th  = document.createElement("th");
                th.innerText = c;
                tr.appendChild(th)
            }

            container.appendChild(tr)

        }
        
        let tr=document.createElement("tr");
        for (let d of Object.values(u)){
            let td = document.createElement("td");
            td.innerText = (typeof d==="object" && Object !== null) ? JSON.stringify(d) : d
            tr.appendChild(td)
        }
        container.appendChild(tr)
    }
}

const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
    for(key in obj){
       if(typeof obj[key] !== 'object'){
          res[extraKey + key] = obj[key];
       }else{
          flattenJSON(obj[key], res, `${extraKey}${key}.`);
       };
    };
    return res;
 };


fetch("https://jsonplaceholder.typicode.com/comments")
    .then(r=>r.json())
    .then(r=>handleUser(r))

    