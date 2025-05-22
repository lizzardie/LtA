

import {createDraggable} from 'anime.esm.js';

const $dragbox = document.querySelectorAll('.drag-box')
const $board = document.querySelector('.entire-board')

createDraggable($dragbox, {
    container: $board,             
    containerPadding: 10,
    releaseStiffness: 40,
});


/* reg js
$(document).ready(function() {
  $(".dragBox").draggable();
});
*/