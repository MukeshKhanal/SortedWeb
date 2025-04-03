document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("header").style.opacity = "1";
    document.querySelector("header").style.transform = "translateY(0)";
});

function onScrollReveal() {
    let elements = document.querySelectorAll(".features, .about, .feature");
    elements.forEach(el => {
        let rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", onScrollReveal);
onScrollReveal();
