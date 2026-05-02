document.addEventListener("DOMContentLoaded", () => {

    /* ================= SCROLL REVEAL ================= */
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    /* ================= DARK MODE ================= */
    const toggleBtn = document.getElementById("modeToggle");

    if (toggleBtn) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            toggleBtn.textContent = "☀️";
        }

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.textContent = "🌙";
            }
        });
    }


    /* ================= VALUE CARD ANIMATION ================= */
    const boxes = document.querySelectorAll(".value-card");

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "0.6s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 150); // smoother timing
    });

});


/* ================= CV MODAL ================= */
function openCV(file) {
    const modal = document.getElementById("cvModal");
    const img = document.getElementById("cvImage");

    img.src = file;
    modal.style.display = "flex";

    // disable background scroll (NEW 🔥)
    document.body.style.overflow = "hidden";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";

    // enable scroll again
    document.body.style.overflow = "auto";
}

/* close on outside click */
window.addEventListener("click", function (e) {
    const modal = document.getElementById("cvModal");
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});