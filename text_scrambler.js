//TEXT SCRAMBLE EFFECT
const title = document.getElementById("title");
const originalText = title.textContent;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let interval = null;

title.addEventListener("mouseenter", () => {

    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {

        title.textContent = originalText
            .split("")
            .map((letter, index) => {

                if (letter === " ") return " ";

                if (index < iteration) {
                    return originalText[index];
                }

                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iteration >= originalText.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;

    }, 30);

});

title.addEventListener("mouseleave", () => {
    clearInterval(interval);
    title.textContent = originalText;
});