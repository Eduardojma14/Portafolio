document.querySelector('.bar-btn').addEventListener('click', function() {
    var menu = document.querySelector('.nav-menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
