// search
const searchBtn = document.querySelector('.my a:nth-child(2)');
const searchCloseBtn = document.querySelector('#search .inner .close a');
const searchSection = document.querySelector('#search');
searchBtn.addEventListener('click', () => {
     searchSection.classList.add('block');
});
searchCloseBtn.addEventListener('click', () => {
     searchSection.classList.remove('block');
})

window.addEventListener('resize', () => {
     if (window.outerWidth < 820) {
          searchSection.classList.remove("block")
     }
 });

// jquery
$(document).ready(function() {

//     submenu
    
     $(".product_menu>li").mouseover(function() {
         $(this).find(".submenu").stop().slideDown();
         $(this).find(".submenu").css("display", "flex");
         $(this).find("div").css("transform", "scaleX(1)");
     });

     $(".product_menu").mouseout(function() {
         $(this).find(".submenu").stop().slideUp();
         $(this).find("div").css("transform", "scaleX(0)");
     });

//     ham & opacity & submenu

     $("#ham").click(function() {
          $(".ham_open").css("right", "0");
          $(".opacity").delay(200).fadeIn(600, 'linear');
     });

     $(".ham_mainmenu>li").click(function() {
          $(this).find(".ham_submenu1").css("right", "0");
     });
     $(".ham_submenu1>li").click(function() {
          $(this).find(".ham_submenu2").css("right", "0");
     });

     $(".opacity").click(function() {
          $(".ham_open").css("right", "-100%");
          $(".ham_open .ham_submenu").css("right", "-100%");
          $(".ham_open .ham_submenu .ham_submenu2").css("right", "-100%");
          $(this).fadeOut(600, 'linear');
     });

     $(document).on("click",".ham_submenu>.back>a", function() {
          $(this).closest("ul").css("right", "-100%");
     });

     $(".login>a").click(function() {
          $(".ham_open").css("right", "-100%");
          $(".opacity").fadeOut(600, 'linear');
     });

     // radio button
     
     $("#man").click(function() {
          $(this).next().find("img").show();
          $("label[for=woman] img").hide();
     });
     $("#woman").click(function() {
          $(this).next().find("img").show();
          $("label[for=man] img").hide();
     });
     
});