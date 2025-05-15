
$(document).ready(function() {
  $(".dragBox").draggable();
});


/* animejs stuff
import {createDraggable} from 'anime.esm.js';

createDraggable(".drag-box", {
    container: ".entire-board",
    x: { snap: 32 },            
    y: { snap: 32 },              
    containerPadding: 10,
    releaseStiffness: 40,
    onGrab: () => {},
    onDrag: () => {},
    onRelease: () => {},
});
*/