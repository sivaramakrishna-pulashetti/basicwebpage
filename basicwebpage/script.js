function animateProduct(element) {
    element.style.transition = "transform 0.5s ease, background-color 0.5s ease";
    element.style.transform = "scale(1.1)";
    element.style.backgroundColor = "#e0f7fa";

    setTimeout(() => {
        element.style.transform = "scale(1)";
        element.style.backgroundColor = "white";
    }, 500);
}
