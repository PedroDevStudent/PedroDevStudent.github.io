function responsiveNavbar() {
    var navBar = document.querySelector(".topnav");
    console.log("Tá okay")
    if (navBar.className === "topnav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "topnav";
    }
}
