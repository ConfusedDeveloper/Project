$(document).ready(function(){
 
    
 
       
    $('#team').hover(function(){
        $('#team').animate({opacity:'0.4'},"slow"); 
       $('#team').animate({opacity:'0.6'},"slow"); 
       $('#team').animate({opacity:'0.8'},"slow"); 
       $('#team').animate({opacity:'1'},"slow");
    
    });
      
       $('#about').hover(function(){
        $('#about-para').hide();
        $('#about-para').slideDown(2000);
        
      
    });
   
    $('#reach').hover(function(){
        $('#reach-para').hide();
        $('#reach-para').slideDown(2000);
        $('#reach-para').fadeOut(2000);
      
    });
   
});





