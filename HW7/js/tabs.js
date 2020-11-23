(function ($){
    var tabOpts = {
        selected: 1
    }
    $("#tabContainer").tabs(tabOpts);

    $("#tabsContainer").bind("tabsadd", function(e, tab) {
        $("#tabsContainer").tabs("select", -1);
    });

    $(document).on("click", ".delete" ,function() {
        var tab = $(this).parent().attr("id");
        $("#" + tab).remove();
        $("#tab-" + tab).remove();
        $("#tabsContainer").tabs("refresh");
    })

    $("#delete-all").click(function (e) { 
        $("#tabList").empty();
        $(".tabBody").remove();
        $("#tabsContainer").refresh();
    });

})(jQuery);