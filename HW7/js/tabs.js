/*
Author: Alex Meier
Email: alex_meier@student.uml.edu
*/
(function ($){
    //initialize tabs
    var tabOpts = {
        selected: 1
    }
    $("#tabContainer").tabs(tabOpts);

    //on click event listener for delete tab button 
    $(document).on("click", ".delete" ,function() {
        var tab = $(this).parent().attr("id");
        $("#" + tab).remove();                      //remove tab body 
        $("#tab-" + tab).remove();                  //remove tab from tray
        $("#tabsContainer").tabs("refresh");        //refresh tab framework
    })

    //event listener for delete all 
    $("#delete-all").click(function (e) { 
        $("#tabList").empty();
        $(".tabBody").remove();
        $("#tabsContainer").refresh();
    });

})(jQuery);