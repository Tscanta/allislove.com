const scrambleSymbols = "!@#$%^&*<>?/[]{}+=-_~";

const lines = document.querySelectorAll(".scramble");

lines.forEach(line => {

    const original = line.textContent;
    let interval = null;

    line.addEventListener("mouseenter", () => {
        clearInterval(interval);
        interval = setInterval(() => {

            const chars = original.split("");
            const changes = Math.floor(Math.random() * 2) + 2;

            for (let i = 0; i < changes; i++) {

                const index = Math.floor(Math.random() * chars.length);

                if (chars[index] !== " ") {

                chars[index] =
                        scrambleSymbols[Math.floor(Math.random() * scrambleSymbols.length)];

                }

            }

            line.textContent = chars.join("");
        }, 130);
    });

    line.addEventListener("mouseleave", () => {
        clearInterval(interval);
        line.textContent = original;

    });

});