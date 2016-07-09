$(function(){
  console.log("this is here");
  $(document).keypress(function(event){
    //var keycode = (event.keyCode ? event.keyCode : event.which);
      if(event.which==115){
      $('#clinton').animate({
        marginLeft: "+=5%"
      });
    }
  $(document).keypress(function(event){
      if(event.which==108){
        $('#trump').animate({
        marginLeft: "+=5%"
      });

      }
    });
  });
});


console.log("outside of $");


//var keycode = (event.keyCode ? event.keyCode : event.which);
 //if(keycode == '13'){
     //alert('You pressed a "enter" key in somewhere');
 //}
