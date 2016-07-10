$(function(){
  $(document).keypress(function(event){
      createNum();
      if(event.which==115){
        $('#clinton').animate({
          marginLeft: "+=" + createNum() +"%"
      });
  }
  $(document).keypress(function(event){
      createNum();
      if(event.which==108){
        $('#trump').animate({
        marginLeft: "+=" + createNum() +"%"
        });
      }
  });
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
