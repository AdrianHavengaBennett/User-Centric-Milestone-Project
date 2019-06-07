/*
$(document).ready(function() {
    
    $("#nav-exit-button").on("click", function() {
        $("#nav-bar").slideUp("slow");
    });
});
*/

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


function navExit() {
    let navElOverlay = document.getElementById("nav-overlay");
    navElOverlay.style.visibility = "hidden";
    
    let navBar = document.getElementById("nav-bar");
    navBar.style.visibility = "hidden";
    
    let navPlayState = document.getElementById("nav-bar");
    navPlayState.style.animationDirection = "reverse";
    navPlayState.style.animationPlayState = "paused";
    
    let navOverlayPlayState = document.getElementById("nav-overlay");
    navOverlayPlayState.style.animationDirection = "reverse";
    navOverlayPlayState.style.animationPlayState = "paused";
    
}

document.addEventListener("onclick", function(event) {
    menuToggle();
    
});


