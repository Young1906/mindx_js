const handleNav = (e) => {
    const wrapper = document.getElementById("nav_wrapper");
    let items = wrapper.getElementsByTagName("li");

    for (let item of items) {
        // console.log(item, e.target, item === e.target)
        if (item === e.target)
            item.setAttribute("class","active")
        else 
        item.setAttribute("class","inactive")
    }

    // console.log(e.target.id)
    if (e.target.id === "nav_index") {
        // Simulate an HTTP redirect:
        window.location.replace("index.html");

    }

    if (e.target.id === "nav_upload") {
        // Simulate an HTTP redirect:
        window.location.replace("upload.html");

    }
}