// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });

    
});
// Open Modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Close Modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close if clicking outside modal
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
