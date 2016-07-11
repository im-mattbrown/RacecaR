$(function(){
  $('footer').hide();
  $('.ready').on('click', function(){
    $('footer').show();
  });
  $('.hillary').one('click', function(){
    $('.playerOne').append('<img id="clinton"src="http://i.imgur.com/QCT8uLb.png">');
  });
  $('.donald').one('click', function(){
    $('.playerTwo').append('<img id="trump"src="http://i.imgur.com/tsUDnqG.png">');
  });
  $('.bernie').one('click', function(){
    $('.playerThree').append('<img id="bernie"src="http://i.imgur.com/pWvBDKC.png">');
  });

  $(document).keyup(function(event){
      if(event.which==13){
        $('#clinton').clearQueue().animate({
          marginLeft: "+=" + createNum() +"%"
        });
      if($('#clinton').css('marginLeft') <= '95' +'%'){
      }else if($('#clinton').css('marginLeft') >= '95' +'%'){
        $('.hillarywins').append('<img src="http://i.imgur.com/VPeKkas.png">');
          $('#clinton').off(event);
       }
      }
      if(event.which==16){
        $('#trump').clearQueue().animate({
          marginLeft: "+=" + createNum() +"%"
        });
      if($('#trump').css('marginLeft') <= '95' +'%'){
      }else if($('#trump').css('marginLeft') >= '95' +'%'){
        $('.trumpwins').append('<img src="http://i.imgur.com/1WhnSiJ.png">');
          $('#trump').off(event);
       }
      }
      if(event.which==32){
        $('#bernie').clearQueue().animate({
          marginLeft: '+=10%'
        });
      if($('#bernie').css('marginLeft') <= '95'+'%'){
      }else if($('#bernie').css('marginLeft') >= '95'+'%'){
        $('.berniewins').append('<img src="http://i.imgur.com/3FxN2Vw.png">');
          $('#bernie').off(event);
       }
      }
  });
  $('.reset').click(function(){
    location.reload();
  });
});
function createNum(){
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomNum = nums[Math.floor(Math.random() * nums.length)];
return randomNum;
}
