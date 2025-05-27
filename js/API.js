const IMG = document.getElementById(`icon`);
function Random() {
    return Math.random();
}
function Up() {
    const seed = Random();
    const Url = `https://api.dicebear.com/9.x/icons/svg?seed=${seed}`;
    IMG.src = Url;
}
Up();
setInterval(Up, 5000);