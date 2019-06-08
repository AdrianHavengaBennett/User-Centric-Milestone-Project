//This function is used to toggle the navigation bar and overlay

function menuToggle() {
    let navElOverlay = document.getElementById("nav-overlay");
    navElOverlay.style.visibility = "visible";
    
    let navBar = document.getElementById("nav-bar");
    navBar.style.visibility = "visible";
    
    let navPlayState = document.getElementById("nav-bar");
    navPlayState.style.animationPlayState = "running";
    
    let navOverlayPlayState = document.getElementById("nav-overlay");
    navOverlayPlayState.style.animationPlayState = "running";
}

document.addEventListener("onclick", function(event) {
    menuToggle();
});


