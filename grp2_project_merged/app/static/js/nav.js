const handleNav = (e) => {
    const wrapper = document.getElementById("nav_wrapper");
    let items = wrapper.getElementsByTagName("li");

    for (let item of items) {
        console.log(e.target.parentNode.id, item.id)

        if (item === e.target)
            item.setAttribute("class","active")
        else
            item.setAttribute("class","inactive")
    }
}
