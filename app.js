var i=0;
document.addEventListener("DOMContentLoaded", function(){
    var navbarIcon = document.getElementById("navbar-icon");
    var navbarLinks = document.getElementById("navbar-links");
    var menu=document.getElementById("menu")
    var whole=document.getElementById("whole")
    var closebtn=document.getElementById("close-btn")
    navbarIcon.addEventListener("click", function() {
        navbarLinks.classList.toggle("open");
        whole.classList.toggle("active")
        i=1;        
        // document.addEventListener("click", function(event) {
        //   if (event.target.tagName !== "A") {
        //       // Call your function here
        //       togglePopUp();
        //   }
        // });

    })
    closebtn.addEventListener("click",function(){
      navbarLinks.classList.toggle("open");
      whole.classList.toggle("active");

    });
 });
 document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && i===1) {
      // Call your function here
      togglePopUp();
  }
});

 function togglePopUp(){
  document.getElementById("navbar-links").classList.toggle("open");
  document.getElementById("whole").classList.toggle("active");

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