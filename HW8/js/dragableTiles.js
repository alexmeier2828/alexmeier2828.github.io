/*
Author: Alex Meier
Email: alex_meier@student.uml.edu
*/


/**
 * returns true if the spot given is a valid space to put a tile
 * TODO:This would be better if I just checked if any spots were occupied instead
 * of passing that info in
 * @param {JQObject} spot - the board-space object where the piece is being placed
 * @param {Boolean} firstPiecePlayed - Are any spotes occupied 
 */
function isPlayableSpot(spot, firstPiecePlayed){
    if(!firstPiecePlayed){
        return true; 
    }
    
    var leftSide = spot.prev();
    var rightSide = spot.next();
    
    //check if one neighboring spot has a piece in it (given this is not the first)
    return (leftSide !== null && leftSide.hasClass('occupied') || (rightSide!== null && rightSide.hasClass('occupied')))

}

/**
 * Called on page load
 */
$(function (){

    //initialize tiles as draggable
    var tileOptions = {
        revert:true
    };
    $(".tile").draggable(tileOptions);


    //set up holder as a dropable
    $("#holder").droppable({
        drop: function(event, ui){
            if(ui.draggable.parent().attr('id') !== 'holder'){
                ui.draggable.parent().droppable('enable');
                ui.draggable.parent().removeClass('occupied')
            }
            $(this).append(ui.draggable);
            
            //check if the last peice is being removed
            firstPiecePlayed = $(this).siblings().hasClass('occupied');

            // $(this).siblings().forEach(element => {
            //     if(element.hasClass('occupied')){
            //         firstPiecePlayed = true;
            //     }
            // });
            console.log(JSON.stringify(event.draggable));
            gameState.updateGameState();
        }
    })

    //Set up game board spaces as droppable 
    $(".board-space").droppable({
        drop: function (event, ui){
            if(isPlayableSpot($(this), firstPiecePlayed)){
                if(!firstPiecePlayed){
                    firstPiecePlayed = true;
                }
                if(ui.draggable.parent().attr('id') !== 'holder'){
                    ui.draggable.parent().droppable('enable');
                    ui.draggable.parent().removeClass('occupied')
                }
                $(this).append(ui.draggable);
                $(this).addClass('occupied');
                $(this).droppable('disable');
                console.log(JSON.stringify(event.draggable));
            }
            gameState.updateGameState();
        }
    });
});