// First, create the vidbg.js instance.
var instance = new vidbg('.video', {
    mp4: 'video/world.mp4',
    webm: 'video/world.webm',
    poster: 'video/poster.jpg',
    overlay: false,
    overlayColor: "#000",
    overlayAlpha: 0.3
}, {

});
const rellax = new Rellax('.rocket');

if (document.body.clientWidth < 576) {
    rellax.destroy();
}

AOS.init()