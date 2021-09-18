const loadHTML = (id, fn_name) => {
    fetch(fn_name)
        .then(resp => resp.text())
        .then((resp)=>{
            let el = document.getElementById(id);
            el.innerHTML = resp;
        });
};

loadHTML("cat_v_cat", "cat_v_cat.html");