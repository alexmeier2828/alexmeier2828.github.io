$(function (){
    var tileOptions = {
        revert:true
    };
    $(".tile").draggable(tileOptions);

    $("#holder").droppable({
        drop: function(event, ui){
            if(ui.draggable.parent().attr('id') !== 'holder'){
                ui.draggable.parent().droppable('enable');

            }
            $(this).append(ui.draggable);
            if($(this).hasClass("board-space")){
                $(this).droppable('disable');
            }
            console.log(JSON.stringify(event.draggable));
        }
    })
    $(".board-space").droppable({
        drop: function (event, ui){
            if(ui.draggable.parent().attr('id') !== 'holder'){
                ui.draggable.parent().droppable('enable');

            }
            $(this).append(ui.draggable);
            if($(this).hasClass("board-space")){
                $(this).droppable('disable');
            }
            console.log(JSON.stringify(event.draggable));
        },
    });
});