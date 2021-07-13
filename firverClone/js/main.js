window.onload = function() {
  setTopPadding();
  onScroll();
};
 
window.onresize = function() {
  setTopPadding();
};

// Lightbox
$(document).ready(function() {    
var $lightbox = $('#lightbox');        
$('[data-target="#lightbox"]').on('click', function(event) {        
var $img = $(this).find('img'),             
src = $img.attr('src'),            
alt = $img.attr('alt'),            
css = {                
'maxWidth': $(window).width() - 100,                
'maxHeight': $(window).height() - 100            
};            
 
$lightbox.find('.close').addClass('hidden');        
$lightbox.find('img').attr('src', src);        
$lightbox.find('img').attr('alt', alt);        
$lightbox.find('img').css(css);    });        
$lightbox.on('shown.bs.modal', function (e) {        
var $img = $lightbox.find('img');                    
$lightbox.find('.modal-dialog').css({'width': $img.width()});        
$lightbox.find('.close').removeClass('hidden');    
});
});
//Header Scroll
// var m = document.querySelector('main'),
//     h = document.querySelector('.header'),
//     hHeight;
 
// function setTopPadding() {
//   hHeight = h.offsetHeight;
//   m.style.paddingTop = hHeight + "px";
// }

//   window.addEventListener('scroll', function(){
//     var y = window.pageYOffset;
//     if (y > 150) {
//       h.classList.toggle('isScroll');
//     } else {
//       h.classList.remove('isScroll');
//     }
//   });

$(document).ready(
  function(){
      //sticky nav
      $('.services').waypoint( //goi jquery waypoint
          function(direction){ //roll chuot
              if(direction == "down"){ //roll xuong
                  $('.header').addClass('isScroll'); //goi class sticky trong style.css
              }else{
                  $('.header').removeClass('isScroll'); //xoa
              }
          },{
              offset: '600px' //cach section about section 100px se thuc hien
          }
      )
      //scroll
      $('.logo').click(function(event){
          $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 600);
          event.preventDefault();
      });
  }
)

//Footer change
var toggleBtn = document.querySelector('.h4Btn');
var toggleBtn1 = document.querySelector('.h4Btn1');
var toggleBtn2 = document.querySelector('.h4Btn2');
var toggleBtn3 = document.querySelector('.h4Btn3');
var toggleBtn4 = document.querySelector('.h4Btn4');

var menuItem = document.querySelector('.categories');
var menuItem1 = document.querySelector('.about');
var menuItem2 = document.querySelector('.support');
var menuItem3 = document.querySelector('.community');
var menuItem4 = document.querySelector('.moreFiverr');

toggleBtn.addEventListener('click',function(){
  menuItem.classList.toggle('isOpen');
});
toggleBtn1.addEventListener('click',function(){
  menuItem1.classList.toggle('isOpen');
});
toggleBtn2.addEventListener('click',function(){
  menuItem2.classList.toggle('isOpen');
});
toggleBtn3.addEventListener('click',function(){
  menuItem3.classList.toggle('isOpen');
});
toggleBtn4.addEventListener('click',function(){
  menuItem4.classList.toggle('isOpen');
});