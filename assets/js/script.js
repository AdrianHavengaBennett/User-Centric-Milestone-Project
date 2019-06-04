function menuToggleMobile() {
    let navElMobile = document.getElementById("nav-bar");
    let navElMobileTwo = document.getElementById("nav-overlay");
    navElMobile.style.visibility = "visible";
    navElMobileTwo.style.visibility = "visible";
    
    let navPlayState = document.getElementById("nav-bar");
    navPlayState.style.animationPlayState = "running";
}

function menuToggle() {
    let navElOne = document.getElementById("nav-bar");
    let navElTwo = document.getElementById("nav-overlay");
    navElOne.style.visibility = "visible";
    navElTwo.style.visibility = "visible";
    
    let navPlayState = document.getElementById("nav-bar");
    navPlayState.style.animationPlayState = "running";
}




