document.addEventListener("click", (e) => {
    if (e.target.id === "menuBtn") {
        document.getElementById("navLinks").classList.toggle("active");
    }
});
