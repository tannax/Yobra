document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("image");

    image.addEventListener("click", changeColors);

    function changeColors() {
        var randomHue = Math.floor(Math.random() * 360);
        image.style.filter = "saturate(1800%) hue-rotate(" + randomHue + "deg)";
    }
});
