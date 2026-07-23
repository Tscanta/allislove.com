document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("birthday-overlay");
    const gift = document.getElementById("birthday-gift");
    const lid = document.querySelector(".gift-lid");
    const glow = document.querySelector(".gift-glow");
    const text = document.getElementById("birthday-text");

    const today = new Date();
    const currentYear = today.getFullYear();

    // ---------- CHANGE THIS TO YOUR BIRTHDAY ----------
    // July = 7
    const isBirthday =
        today.getMonth() === 6 &&
        today.getDate() === 23;

    // Has it already been opened this year?
    const opened =
        localStorage.getItem("birthdayGift") === String(currentYear);

    // ---------- SHOW GIFT ----------

    overlay.style.display = "flex";

        // Reset starting state
        gift.style.animation = "none";
        gift.offsetHeight; // Force browser reflow

        // Start the drop animation
        gift.style.animation = "giftDrop .9s ease forwards";

        gift.addEventListener("animationend", () => {
            gift.style.animation = "giftFloat 2s ease-in-out infinite";
        }, { once: true });

    // ---------- OPEN GIFT ----------

    gift.addEventListener("click", () => {
        if (gift.dataset.opened) return;
        gift.dataset.opened = "true";

        // Stop floating
        gift.style.animation = "giftSquish .25s ease";
        setTimeout(() => {
            lid.style.animation = "lidOpen .7s forwards";
        }, 200);

        // Glow
        if (glow) {
            setTimeout(() => {

                glow.style.opacity = "1";
                glow.style.transform =
                    "translate(-50%, -50%) scale(10)";
            }, 320);
        }

        // Confetti
        setTimeout(() => {
            if (typeof confetti === "function") {
                confetti({
                    particleCount: 250,
                    spread: 130,
                    origin: {
                        y: 0.55
                    }
                });
            }
        }, 450);

        // ---------- SELF TYPING ----------

        setTimeout(() => {
            const message = "Happy Birthday!!";
            text.style.opacity = "1";
            text.style.transform = "translate(-50%, 0)";
            text.textContent = "";

            let i = 0;
            const typing = setInterval(() => {
                text.textContent += message.charAt(i);
                i++;
                if (i >= message.length) {
                    clearInterval(typing);
                }
            }, 90);
        }, 900);

        // Save for this year
        localStorage.setItem(
            "birthdayGift",
            String(currentYear)
        );

        // ---------- FADE OUT ----------

        // ---------- FADE OUT ----------

    setTimeout(() => {

        overlay.style.opacity = "0";

        setTimeout(() => {

            overlay.style.display = "none";
            overlay.style.opacity = "1";

            text.style.opacity = "0";
            text.style.transform = "translate(-50%, -20px)";
            text.textContent = "";

            if (glow) {
                glow.style.opacity = "0";
                glow.style.transform = "translate(-50%, -50%) scale(0)";
            }

            // Reset the lid
            lid.style.animation = "";
            lid.style.opacity = "1";

            // Reset the gift
            gift.style.animation = "";

            delete gift.dataset.opened;

        }, 700);
    }, 5000);
});
});