$(function(){
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
      if(event.which==13){
        $('#clinton').animate({
          marginLeft: "+=" + createNum() +"%"
        });
        $('#clinton').clearQueue();
      if($('#clinton').css('margin-left') <= '90' +'%'){
      }else {
        $('.hillarywins').append('<img src="http://i.imgur.com/VPeKkas.png"></img>');
      }
      }
    });
  $(document).keyup(function(event){
      if(event.which==16){
        $('#trump').animate({
          marginLeft: "+=" + createNum() +"%"
        });
        $('#trump').clearQueue();
      if($('#trump').css('margin-left') <= '90' +'%'){
      }else{
        $('.trumpwins').append('<img src="http://i.imgur.com/RcOfI3H.png"></img>');
      }
      }
  });
  $(document).keydown(function(event){
      if(event.which==32){
        $('#bernie').animate({
          marginLeft: '+=10%'
        });
        $('#bernie').clearQueue();
      if($('#bernie').css('margin-left') <= '90'+'%'){
      } else{
        $('.berniewins').append('<img src="http://i.imgur.com/3FxN2Vw.png"></img>');
      }
      }
    });
});
function createNum(){
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomNum = nums[Math.floor(Math.random() * nums.length)];
return randomNum;
}
