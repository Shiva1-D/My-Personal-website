
document.getElementById("dark-mode-toggle").onclick = function() {
    document.body.classList.toggle("dark");

    // Apply dark mode to all boxes
    document.querySelectorAll('.box').forEach(box => {
        box.classList.toggle("dark");
    });
};

