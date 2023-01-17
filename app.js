
document.addEventListener("DOMContentLoaded", function(){
    var navbarIcon = document.getElementById("navbar-icon");
    var navbarLinks = document.getElementById("navbar-links");
    var menu=document.getElementById("menu")
    var whole=document.getElementById("whole")
    navbarIcon.addEventListener("click", function() {
        navbarLinks.classList.toggle("open");
        // whole.classList.toggle("open")

    });
 });
 function togglePopUp(){document.getElementById("navbar-links").classList.toggle("open");

 }
 var a = 0;
 $(window).scroll(function() {

   var oTop = $('.counter').offset().top - window.innerHeight;
   console.log(oTop)
   if (a == 0 && $(window).scrollTop() > oTop) {
     $('.counter-value').each(function() {
       var $this = $(this), 
         countTo = $this.attr('data-count');
       $({
         countNum: $this.text()
       }).animate({
           countNum: countTo
         },

         {
           duration: 2000,
           easing: 'swing',
           step: function() {
             $this.text(Math.floor(this.countNum));
           },
           complete: function() {
             $this.text(this.countNum);
             //alert('finished');
           }

         });
     });
     a = 1;
   }

 });