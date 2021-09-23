const mountJS = (jsFile) => {
    const jsMountPoint = document.getElementById("jsMountPoint");

    script = document.createElement("script");
    script.setAttribute("src", jsFile);

    // Mount to html file
    jsMountPoint.insertAdjacentElement("afterend", script);
    return;
}

mountJS("tab_js/cat_v_cat.js")
