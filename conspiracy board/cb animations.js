src="https://cdn.jsdelivr.net/npm/animejs/lib/anime.iife.min.js"
const { animate } = anime;
anime.animate();
anime.createTimeline();
anime.createDraggable('.artmini');

anime({
    targets: '.artmini',
    translateX: 200
})