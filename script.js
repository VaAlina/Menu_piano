$(document).ready(function(){
    
  $(".menu").mouseenter(function(){
    $(this).animate({
      left:'50px',
      width:'150px'
    }, 1000);
  });
    
      $(".menu").mouseleave(function(){
    $(this).animate({
      left:'-50px',
      width:'100px'
    }, 1000);
  });
    
});
