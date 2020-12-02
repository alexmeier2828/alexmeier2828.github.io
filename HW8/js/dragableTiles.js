$(function (){
    var tileOptions = {
        revert:true
    };
    $(".tile").draggable(tileOptions);

    $(".board-space").droppable({
        drop: function (event, ui){
            $(this).addClass("ui-state-highlight");
            console.log($(this))
        }
    });
});