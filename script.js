document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project-card, .exp-card").forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
