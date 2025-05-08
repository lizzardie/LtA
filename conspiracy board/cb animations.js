import {animate, draggable} from 'anime.esm.js';
const { animate } = anime;
const draggable = createDraggable();

createDraggable({
    targets: ".drag-box",
    container: ".entire-board",
});

