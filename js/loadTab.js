const loadHTML = (id, fn_name) => {
    fetch(fn_name)
        .then(resp => resp.text())
        .then((resp)=>{
            let el = document.getElementById(id);
            el.innerHTML = resp;
        });
};

loadHTML("cat_v_cat", "tabs/cat_v_cat.html");
loadHTML("best_of_cat", "tabs/best_of_cat.html");
loadHTML("cat_stuff", "tabs/cat_stuff.html");