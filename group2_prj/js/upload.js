const handleUpload = async (e) => {
    e.preventDefault();

    let id_ = uuidv4();
    const fn = document.getElementById("catImg");
    

    // file ext
    let ext = fn.value.split(".")
    ext = ext[ext.length - 1];

    const fd = new FormData()
    fd.append("file", fn.files[0]);


    // Post meta data to googlesheet
    let data = {
        id: id_,
        cat_name: document.getElementById("catName").value,
        img_name: id_+"."+ext,
        description: document.getElementById("catDesc").value,
        rating: 1000,
        view: 0,
        like: 0,
        dislike: 0,
        superlike: 0  
    }

    console.log(data)

    // console.log(data);

    // // upload to gsheet
    const result = fetch("https://sheetdb.io/api/v1/m2e4rmarwbo15", {
        method: "POST",
        // mode: "cors",
        headers: {
            "Content-type":"application/json"
        }, 
        body: JSON.stringify(data)
    })
    .then(resp => console.log(resp.text()))
    .then(success => console.log(success))
    .catch(error => console.log(error))
    
    // // Upload file
    result.then(
        fetch("http://127.0.0.1:5000/?fn="+id_, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "content-type":"image/*"
            },
            body: fd
        }).then (resp => console.log(resp.text()))
        .then(success => console.log(success))
        .catch(error => console.log(error))
    )

}   



function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

