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

     // main
     setInterval(function() { 
          $('#img_slide a:first-child')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#img_slide")
        },  5000);

     // $(".tab_title").click(function() {
     //      $(this).siblings(".tab_list").css("display", "flex");
     //      $(this).parents("li").siblings().find(".tab_list").css("display", "none");

     //      $(this).css("font-weight", "700");
     //      $(this).parents("li").siblings().find(".tab_title").css("font-weight", "500");
     // })

});

// main section3
// tab first list
document.querySelector(".tabmenu>li:first-child .tab_list").classList.add('flex');

// tab first title
document.querySelector(".tabmenu>li:first-child .tab_title").classList.add('bold');

// tab icon & unit img & unit info
const tabTitleList = document.querySelectorAll(".tab_title");
const tabListList = document.querySelectorAll(".tab_list");

for (let i = 0; i < tabTitleList.length; i++) {
     tabTitleList[i].addEventListener('click', (e) => {
          e.preventDefault();
          for (let j = 0; j < tabTitleList.length; j++) {
          tabListList[j].classList.remove('flex');
          tabTitleList[j].classList.remove('bold');
     }
     tabListList[i].classList.add('flex');
     tabTitleList[i].classList.add('bold');
     })
};