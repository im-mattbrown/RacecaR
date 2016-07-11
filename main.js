$(function(){
  console.log("hey");
  $('.hillary').one('click', function(){
    $('.playerOne').append('<img id="clinton"src="http://i.imgur.com/QCT8uLb.png"></img>');
  });
  $('.donald').one('click', function(){
    $('.playerTwo').append('<img id="trump"src="http://i.imgur.com/tsUDnqG.png"></img>');
  });
  $('.bernie').one('click', function(){
    $('.playerThree').append('<img id="bernie"src="http://i.imgur.com/pWvBDKC.png"></img>');
  });

  $(document).keypress(function(event){
    if($('#clinton').css('margin-left') <= '90' +'%'){
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
    if($('#trump').css('margin-left') <='90' +'%'){
      if(event.which==107){
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
    if($('#bernie').css('margin-left') <= '90'+'%'){
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
