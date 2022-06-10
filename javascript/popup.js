$(document).ready(function() {
   
    $('img#pop').hover(function() {

       $(this).css('width', '500px');
       $(this).css('height', '500px');
    }, function() {

       $(this).css('width', '200px');
       $(this).css('height', '250px');
    });
    
 });