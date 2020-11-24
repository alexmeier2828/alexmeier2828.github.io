/*
Author: Alex Meier
Email: alex_meier@student.uml.edu
*/
$(document).ready(function() {
    //prevent form submit from refreshing page
    $("form").submit(function(event ){
        event.preventDefault();
    });

    //custom rules for row and column validation - check if row start is
    //greater then row 
    jQuery.validator.addMethod("rowIsValid", function(value, element){
        console.log("Value:" + value);
        return this.optional(element) || (value <= parseInt(document.getElementById("rowe").value));
    });

    jQuery.validator.addMethod("colIsValid", function(value, element){
        console.log("Value:" + value);
        return this.optional(element) || (value <= parseInt(document.getElementById("cole").value));
    });

    //initialize validation for table-form
    $("#table-form").validate({
        submitHandler: function(form){
            var table = makeTable(form);
            if($("#liveEdit").is(":checked")) {
                var activeTabID = $("#tabContainer .ui-tabs-panel:visible").attr("id");
                console.log($("#"+activeTabID).find(".tableContainer"));
                $("#"+activeTabID).find(".tableContainer").first().remove();


                //add table to tab div
                table.classList.add("tableContainer");
                $("#" + activeTabID).prepend(table);
            } else {
                createNewTableTab(table);
            }
        },
        rules: {
            rows: {
                rowIsValid: true
            },
            cols: {
                colIsValid: true
            }
        },
        messages: {
            rows: {
                rowIsValid: "Row start must be less then Row End"
            },
            cols: {
                colIsValid: "Column Start must be less that Column End"
            }

        }
    });


    //add common rules to each number input 
    $('input[type="number"]').each(function(){
        $(this).rules('add', {
            required: true,
            min: {
                param: -50
            },
            max: {
                param: 50
            }
        });
    });
});



