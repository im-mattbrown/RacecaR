$(function(){



  $(document).keypress(function(event){
    if($('#clinton').css('marginLeft') < '90%'){
      if(event.which==113){
        $('#clinton').animate({
          marginLeft: "+=" + createNum() +"%"
        });
        $('#clinton').clearQueue();
      }
    }else{
      alert("hillary has won");
    }
  });
  $(document).keypress(function(event){
    if($('#trump').css('marginLeft') < '90%'){
      if(event.which==108){
        $('#trump').animate({
          marginLeft: "+=" + createNum() +"%"
        });
        $('#trump').clearQueue();
      }
    }else{
      alert("trum has won");
    }
  });
  $(document).keypress(function(event){
    if($('#bernie').css('marginLeft') < '90%'){
      if(event.which==98){
        $('#bernie').animate({
          marginLeft: '+=10%'
        });
        $('#bernie').clearQueue();
      }
    }else{
      alert("bernie has won");
    }
  });
});
function createNum(){
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomNum = nums[Math.floor(Math.random() * nums.length)];
return randomNum;
}



//var keycode = (event.keyCode ? event.keyCode : event.which);
 //if(keycode == '13'){
     //alert('You pressed a "enter" key in somewhere');
 //}
