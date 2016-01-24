// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//require jquery.turbolinks
//= require bootstrap
// require turbolinks
//= require_tree


$(document).on('page:change', function() {

    tabOverDemoSetup()

});



/**
$(function() {
    $( "#datepicker" ).datepicker();
});

//solve the turbolinks problem %%

$(function tabOverDemoSetup() {
    $('.time').
    click( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).
        keydown(
        function(e) {
            var key = e.keyCode || e.which;
            if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                $(this).off('keydown').AnyTime_picker().focus();
                e.preventDefault();
            }
        } );
})();

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
**/




/**
window.onload=function()
{
{

    $(function tabOverDemoSetup() {
        $('.time').click( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).keydown(
            function(e) {
                var key = e.keyCode || e.which;
                if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                    $(this).off('keydown').AnyTime_picker().focus();
                    e.preventDefault();
                }
            } );
    })();

    $(function() {
        $( "#datepicker" ).datepicker();
    });

    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle("slow");
        });
    });
}
**/
$(document).on('ready page:load', function() {

    tabOverDemoSetup()


/**
    $(function tabOverDemoSetup() {
        $('.time').click( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).keydown(
            function(e) {
                var key = e.keyCode || e.which;
                if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                    $(this).off('keydown').AnyTime_picker().focus();
                    //e.preventDefault();
                }
            } );
    })();
**/

});
/**
$(function() {
    initPage();
});

$(window).bind('page:change', function() {
    $(function tabOverDemoSetup() {
        $('.time').click( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).keydown(
            function(e) {
                var key = e.keyCode || e.which;
                if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                    $(this).off('keydown').AnyTime_picker().focus();
                    e.preventDefault();
                }
            } );
    })();

    $(function() {
        $( "#datepicker" ).datepicker();
    });
tabOverDemoSetup()
    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle("slow");
        });
    });
});
function initPage() {
    $(function tabOverDemoSetup() {
        $('.time').cltimeick( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).keydown(
            function(e) {
                var key = e.keyCode || e.which;
                if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                    $(this).off('keydown').AnyTime_picker().focus();
                    e.preventDefault();
                }
            } );
    })();

    $(function() {
        $( "#datepicker" ).datepicker();
    });

    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle("slow");
        });
    });
}

**/

function tabOverDemoSetup() {time
    $('.time').click( function(e) { $(this).off('click').AnyTime_picker().focus(); } ).keydown(
        function(e) {
            var key = e.keyCode || e.which;
            if ( ( key != 16 ) && ( key != 9 ) ) { // shift, del, tab
                $(this).off('keydown').AnyTime_picker().focus();
                //e.preventDefault();
            }
        } );
}