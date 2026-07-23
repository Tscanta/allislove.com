const cat = document.getElementById("cat");
const today = new Date();

const isBirthday =
    today.getMonth() === 6 &&
    today.getDate() === 23;


/* ---------------- Sleeping ---------------- */
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

/* ---------------- Animations ---------------- */

const animations = {

happy: [
` /\\_/\\\\
( •.• )
 > ^ <`,

` /\\_/\\\\
( ^.^ )
 > ^ <`,

` /\\_/\\\\
( ^.^ ) ❤
 > ^ <`,

` /\\_/\\\\
( ^.^ )
 > ^ <`
],

angry: [
` /\\_/\\\\
( >.< )
 > ^ <`,

` /\\_/\\\\
( >.< )
 > ^ \\`,

` /\\_/\\\\
( >.< )
 / ^ <`,

` /\\_/\\\\
( -.- )
 > ^ <`
],

yawn: [
` /\\_/\\\\
( o.o )
 > ^ <`,

` /\\_/\\\\
( O.O )
 > O <`,

` /\\_/\\\\
( -.- )
 > ^ <`
],

curious: [
` /\\_/\\\\
( o.o )
 > ^ <`,

` /\\_/\\\\
( o.O )
 > ^ <`,

`  /\\_/\\\\
 ( o.o )
  > ^ <`,

` /\\_/\\\\
( -.- )
 > ^ <`
],

wave: [
` /\\_/\\\\
( ^.^ )/
 > ^ <`,

` /\\_/\\\\
\\( ^.^ )
 > ^ <`,

` /\\_/\\\\
( ^.^ )/
 > ^ <`,

` /\\_/\\\\
( -.- )
 > ^ <`
],

birthdayDance: [

`      /\\
     /__\\
    /\\_/\\\\
 ♪ ( ^▽^ )
    > ^ <`,

`       /\\
      /__\\
    /\\_/\\\\
  ( ^▽^ ) ♪
    < ^ >`,

`      /\\
     /__\\
    /\\_/\\\\
 ♫ ( ^▽^ )
    > ^ <`,

`       /\\
      /__\\
    /\\_/\\\\
  ( ^▽^ ) ♫
    < ^ >`

]
};

/* ---------------- Variables ---------------- */

let sleepingInterval;
let animationInterval;
let timeout;
let busy = false;

/* ---------------- Sleeping ---------------- */

if(isBirthday){
    cat.textContent = animations.birthdayDance[0];
}
function startSleeping(){

    clearInterval(animationInterval);
    clearTimeout(timeout);

    let frame = 0;

    // 🎉 Birthday mode
    if(isBirthday){
        sleepingInterval = setInterval(()=>{
            cat.textContent = animations.birthdayDance[frame];
            frame = (frame + 1) % animations.birthdayDance.length;
        },350);
        return;
    }

    // 😴 Normal sleeping mode
    sleepingInterval = setInterval(()=>{
        cat.textContent = sleepingFrames[frame];
        frame = (frame + 1) % sleepingFrames.length;
    },760);

}

/* ---------------- Play Animation ---------------- */

function playAnimation(frames){

    busy = true;

    clearInterval(sleepingInterval);

    let frame = 0;

    cat.textContent = frames[0];

    animationInterval = setInterval(()=>{

        frame++;

        if(frame >= frames.length){

            clearInterval(animationInterval);

            timeout = setTimeout(()=>{

                busy = false;
                startSleeping();

            },1200);

            return;

        }

        cat.textContent = frames[frame];

    },650);

}

/* ---------------- Random Animation ---------------- */

function randomAnimation(){

    const r = Math.random();

    if(r < 0.35){
        playAnimation(animations.happy);

    }else if(r < 0.55){
        playAnimation(animations.yawn);

    }else if(r < 0.75){
        playAnimation(animations.angry);

    }else if(r < 0.90){
        playAnimation(animations.curious);

    }else{
        playAnimation(animations.wave);

    }

}

/* ---------------- Click ---------------- */

cat.addEventListener("click",()=>{
    if(busy) return;
    randomAnimation();
});

/* ---------------- Start ---------------- */

startSleeping();