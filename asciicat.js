const cat = document.getElementById("cat");

const sleepingFrames = [
` /\\_/\\\\
( -.- ) z  
 > ^ <`,

` /\\_/\\\\
( -.- ) zz 
 > ^ <`,

` /\\_/\\\\
( -.- ) zzz
 > ^ <`
];
const blinkingFrames = [
` /\\_/\\\\
( •.• )
 > ^ <`,

` /\\_/\\\\
( -.- )
 > ^ <`
];

let sleepingInterval;
let blinkingInterval;
let sleepTimeout;

// Start sleeping animation
function startSleeping(){

    clearInterval(blinkingInterval);
    clearTimeout(sleepTimeout);

    let frame = 0;

    sleepingInterval = setInterval(() => {
        cat.textContent = sleepingFrames[frame];
        frame = (frame + 1) % sleepingFrames.length;
    }, 700);
}

// Wake the kitty up
cat.addEventListener("click", () => {
    clearInterval(sleepingInterval);
    clearInterval(blinkingInterval);
    clearTimeout(sleepTimeout);

    let frame = 0;

    blinkingInterval = setInterval(() => {
        cat.textContent = blinkingFrames[frame];
        frame = (frame + 1) % blinkingFrames.length;
    }, 600);

    // Cat sleeps after 5secs
    sleepTimeout = setTimeout(() => {
        startSleeping();
    }, 5000);

});

startSleeping();