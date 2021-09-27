const handleUpload = () => {
    let id_ = uuidv4();
    const fn = document.getElementById("catImg");

    console.log(fn.value)
    // compute fn name to save onto server
    // file extension
    let fn_ext = fn.value.match("\.([a-z]+)$")[0]
    const fn_name = id_+fn_ext;
    

    let data = {
        id: id_,
        cat_name: document.getElementById("catName").value,
        description: document.getElementById("catDesc").value,
        img_name: fn_name,
        rating: 1000,
        view: 0,
        like: 0,
        dislike: 0,
        superlike: 0  
    }

    // upload to gsheet
    fetch("https://sheetdb.io/api/v1/m2e4rmarwbo15", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify(data)
    })

    // save file

    console.log(data);
}   



function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }