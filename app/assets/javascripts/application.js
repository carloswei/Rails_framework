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
//= require bootstrap
//= require turbolinks
//= require_tree

$(function() {
    $( "#datepicker" ).datepicker();
});



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