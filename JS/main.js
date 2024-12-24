// Welcome Screen
window.addEventListener('load', function () {
    // Equivalent of $("body").css("overflow", "auto");
    document.body.classList.add("onload");

    // Equivalent of $(".welcome-screen").fadeOut(2000, function() {...});
    let welcomeScreen = document.querySelector(".welcome-screen");
    if (welcomeScreen) {
        fadeOutElement(welcomeScreen, 1000, function () {
            welcomeScreen.parentNode.removeChild(welcomeScreen);
        });
    }
});

// Function to fade out an element
function fadeOutElement(element, duration, callback) {
    let opacity = 1;
    let interval = 50; // Adjust this for smoother or faster animations
    let delta = interval / duration;

    function fade() {
        opacity -= delta;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fading);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    let fading = setInterval(fade, interval);
}

// Sidebar Navigation
function showSidebar() {
    document.querySelector(".side-bar").classList.add("show");
    document.querySelector(".sidebar-overlay").classList.add("over");
    document.body.classList.remove("onload");
    document.body.classList.add("overhide");
}

function closeSidebar() {
    document.querySelector(".side-bar").classList.remove("show");
    document.querySelector(".sidebar-overlay").classList.remove("over");
    document.body.classList.add("onload");
    document.body.classList.remove("overhide");
}

// Mute Button
// let muteBtn = document.querySelectorAll(".mutebtn");
// let video = document.getElementById('news-video');
// muteBtn.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         if (video.muted) {
//             video.muted = false;
//             btn.innerHTML = 'Mute';
//         } else {
//             video.muted = true;
//             btn.innerHTML = 'Unmute';
//         }
//     });
// });

// Mute Button
let video = document.getElementById('news-video');
let muteBtns = document.getElementsByClassName("mutebtn");
function muteVideo() {
    if (video.muted) {
        video.muted = false;
        for (let i = 0; i < muteBtns.length; i++) {
            muteBtns[i].innerHTML = "Mute";
        }
    } else {
        video.muted = true;
        for (let i = 0; i < muteBtns.length; i++) {
            muteBtns[i].innerHTML = "Unmute";
        }
    }
}

// Latest News Slider
let slideIndex = 1, timer;
newsSlider(slideIndex);

function nextCard(n) {
    newsSlider(slideIndex += n);
};

function currentCard(n) {
    newsSlider(slideIndex = n);
};

function newsSlider(n) {
    let i,
        card = document.getElementsByClassName("slider-card"),
        indicators = document.getElementsByClassName("indicator");

    if (n > card.length) {slideIndex = 1}
    if (n < 1) {slideIndex = card.length}

    for (i = 0; i < card.length; i++) {
        card[i].style.display = "none";  
    }

    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }

    card[slideIndex-1].style.display = "block";
    indicators[slideIndex-1].className += " active";
    
    // Clear existing timer
    clearTimeout(timer);
    // Start a new timer for autoslide
    timer = setTimeout(function() {
        nextCard(1);
    }, 4000); // Change Slider Box every 4 seconds
};

// Scroll To Top Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// News Details Functions
function showBox(index) {
    const boxes = document.querySelectorAll('.box-section');
    
    for (let i = 0; i < boxes.length; i++) {
        if (i === index) {
            boxes[i].style.display = 'block';
        } else {
            boxes[i].style.display = 'none';
        }
    }
}

function closeBox() {
    let box = document.querySelectorAll(".box-section");
    for (let i = 0; i < box.length; i++) {
        box[i].style.display = "none";
    }
}