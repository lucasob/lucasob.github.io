// message for user and styling
const message = "So I see you're having a look at my source code. " +
    "I like the fact that you're thorough. " +
    "I feel awful, but it really is just mark up, so a hint for your easter egg: " +
    "Don't do it";

// funky boys can get applied in the browser console, yeehaw
const lineStyle = "background-color: #20272E; color: #fff; font-size: 14px;";

// don't press it
function pleaseDontDoIt () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO";
}

// share with the world
console.log(`%c${message}`, lineStyle);

// I guess if they're super thorough they'll notice some special zoomies
console.table({
    easter: "egg",
    pleaseDontDoIt
});