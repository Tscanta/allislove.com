const stars = document.getElementById("stars");

// Different star symbols
const symbols = [
    "✦",
    "✧",
    "⋆",
    "✶",
    "✷",
    "✹",
    "·"
];

// Limit the number of stars on screen
const MAX_STARS = 120;

document.addEventListener("mousemove", (e) => {

    // Spawn rate (lower = more stars)
    if (Math.random() > 0.35) return;

    const star = document.createElement("span");
    star.className = "star";

    // Random star symbol
    star.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    // Position
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";

    // Random size
    const size = Math.random() * 10 + 8;
    star.style.fontSize = size + "px";

    // Random horizontal drift
    star.style.setProperty(
        "--x",
        (Math.random() * 60 - 30) + "px"
    );

    // Random rotation
    star.style.setProperty(
        "--r",
        (Math.random() * 720 - 360) + "deg"
    );

    // Random animation duration
    star.style.animationDuration =
        (Math.random() * 0.6 + 0.8) + "s";

    stars.appendChild(star);

    // Prevent too many stars
    while (stars.children.length > MAX_STARS) {
        stars.removeChild(stars.firstChild);
    }

    star.addEventListener("animationend", () => {
        star.remove();
    });

});