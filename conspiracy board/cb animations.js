src="https://cdn.jsdelivr.net/npm/animejs/lib/anime.iife.min.js"
import {animate, draggable} from 'animejs';
const { animate } = anime;
const draggable = createDraggable();

anime.createDraggable(".drag-box", {
    container: ".entire-board",
});

