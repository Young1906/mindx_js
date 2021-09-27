const handleUpload = async (e) => {
    let id_ = uuidv4();
    const fn = document.getElementById("catImg");

    const fd = new FormData()
    fd.append("file", fn.files[0]);

    fetch("http://127.0.0.1:5000/"+id_, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "content-Type":"image/*"
        },
        body: fd
    }).then (resp => console.log(resp.text()))
    .then(success => console.log(success))
    .then(()=>e.preventDefault())
    .catch(error => console.log(error))
    
    // Post meta data to googlesheet
    let data = {
        id: id_,
        cat_name: document.getElementById("catName").value,
        description: document.getElementById("catDesc").value,
        rating: 1000,
        view: 0,
        like: 0,
        dislike: 0,
        superlike: 0  
    }

    // upload to gsheet
    
    fetch("https://sheetdb.io/api/v1/m2e4rmarwbo15", {
        method: "POST",
        // mode: "cors",
        headers: {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify(data)
    })    
}   



function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

