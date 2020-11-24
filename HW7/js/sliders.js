(function($){
    //initialize sliders
    var sliderOptions = {
        slide: function (e, ui) {
            var val = ui.value; 
            console.log("SliderMoved:" + $(this).id + " " + val);
            $(this).next().val(val);
            if($("#liveEdit").is(":checked")) {
                $("#table-form").submit(); //submit on change
            }
        },
        value: $(this).next().val(),
        animate: true,
        min: -50,
        max: 50,
    }
    $("#rowStartSlider").slider(sliderOptions);
    $("#rowEndSlider").slider(sliderOptions);
    $("#colStartSlider").slider(sliderOptions);
    $("#colEndSlider").slider(sliderOptions);


    //crossbinding for input fields 
    $(".formNumber").change(function (event) {
        $(this).prev().slider('value', event.target.value) //set associated slider value to the value of this input field
        if($("#liveEdit").is(":checked")) {
            $("#table-form").submit(); //submit on change
        }
    });

})(jQuery);