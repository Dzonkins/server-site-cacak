function openCloseNav() {
    if (document.getElementById("sidebar").style.width == '340px') {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("content").style.width = "-50px";
    } else {
       document.getElementById("sidebar").style.width = '340px'
       document.getElementById("content").style.width = "340px";
    }
}