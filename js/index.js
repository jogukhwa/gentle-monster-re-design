$("docunemt").ready(function(){
    AOS.init();
    
    $(".best-sellers ul li").eq(0).addClass("on")
    $(".swiper.best-content").eq(0).show()
    $(".collabo-left .img-content").eq(0).show()
    $(".collabo-right ul li").eq(0).addClass("on")
    $(".style .photo .image").eq(0).show()
    $(".style .swiper-slide.content .content-wrap img").eq(0).addClass("on")
    $(".style .other .image").eq(0).show()


//메인배너구간    

    const swiper3 = new Swiper(".header .swiper.banner",{
        effect: "fade",
        speed: 500,
        autoplay: {
        delay: 5500
        },
        loop: true
    })

//메뉴 클릭

    $(".side-menu-bottom ul li.top").click(function(e){
        e.preventDefault()
        $(this).next().slideToggle().siblings("li.bottom").slideUp(500)
    })


//고정 네비바 


    $(window).scroll(function(){

        let pos = $(window).scrollTop()
        let new_pos = Math.floor(pos / $(".header").height());
        if(new_pos >=1){
            $(".fixed-header").fadeIn()
        }else{
            $(".fixed-header").fadeOut()
        }
    })


//고정네비바 메뉴 클릭

$(".fixed-header .menu-icon ul li").click(function(e){
    e.preventDefault()
    $(".window").show()
    $(".fixed-nav").slideDown(1000)
    $("html,body").css("overflow", "hidden")

})
$(".fixed-nav .fixed-nav-wrap > a ").click(function(e){
    e.preventDefault()
    $(".window").hide()
    $(".fixed-nav").slideUp(800)
    $("html,body").css("overflow", "visible")
})
$(".fixed-nav .menu ul li.top").click(function(e){
    e.preventDefault()
    $(this).next().slideToggle().siblings("li.bottom").slideUp(500)
})

//모바일 메뉴 클릭

$(".fixed-header .m-fixed-header ul li").click(function(e){
    e.preventDefault()
    $(".fixed-nav").slideDown(500)
})

$(".m-header .m-menu ul li a").click(function(e){
    e.preventDefault()
    $(".fixed-nav").slideDown(500)
})


//신제품 호버구간


    let new_arr = [
        "images/new_TAMBU_2.jpg",
        "images/new_le_2.jpg",
        "images/new_JEFF_2.jpg"
    ]

    let ori_new= [
        "images/new_TAMBU_1.jpg",
        "images/new_le_1.jpg",
        "images/new_JEFF_1.jpg"
    ]


    $(".new .new-content-wrap .new-content-box").mouseover(function(){
        let a = $(this).index()
        $(".new .new-content-wrap .new-content-box img").eq(a).attr("src", new_arr[a])
        $(".new .new-content-wrap .new-content-box").not($(this)).addClass("on")
        }).mouseout(function(){
        a = $(this).index()
        $(".new .new-content-wrap .new-content-box img").eq(a).attr("src", ori_new[a])
        $(".new .new-content-wrap .new-content-box").removeClass("on")
    })

//베스트셀러 선글라스, 안경 선택 구간

    $(".best-sellers ul li").click(function(e){
        e.preventDefault()
        let i = $(this).index()
        $(".best-sellers ul li").removeClass("on").eq(i).addClass("on")
        $(".swiper.best-content").hide().eq(i).show()

    })

//베스트셀러 슬라이드

    const swiper = new Swiper(".swiper.best-content",{
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        mousewheel: {
            invert: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable : true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            767: {        
                centeredSlides: true,
                roundLengths: true,

            },
            1200: {
                centeredSlides: true,
                roundLengths: true,
                slidesPerView: 4,  //브라우저가 1024보다 클 때
                spaceBetween: -90,
            }
        }
    })

    $(".best-sellers .content-box").click(function(e){
        e.preventDefault()
    })

//콜라보레이션 




    let idx = 0;

    $(".collabo-right ul li").mouseover(function(){
        idx = $(this).index();
        $(".collabo-left .img-content").hide().eq(idx).show()
        $(".collabo-right ul li").removeClass("on").eq(idx).addClass("on")
        clearInterval(timer)
    }).mouseout(function(){
        clearInterval(timer)
        timer = setInterval(function(){
            idx++
            if(idx > $(".collabo-right ul li").length-1){
                idx = 0;
            }
            $(".collabo-left .img-content").hide().eq(idx).show()
            $(".collabo-right ul li").removeClass("on").eq(idx).addClass("on")
        }, 4000)
    }).click(function(e){
        e.preventDefault()
        
        let c = $(this).index()
        $(".collabo-left .img-content").hide().eq(c).show()
        $(".collabo-right ul li").removeClass("on").eq(c).addClass("on")
    })



    let timer = setInterval(function(){
        idx++;
        if(idx > $(".collabo-right ul li").length-1){
            idx = 0;
        }
        $(".collabo-right ul li").removeClass("on").eq(idx).addClass("on")
        $(".collabo-right ul li").hide().eq(idx).show();
        $(".collabo-left .img-content").hide().eq(idx).show()
    }, 4000)


    if (matchMedia("screen and (max-width: 767px)").matches) {
        // 1024px 이상에서 사용할 JavaScript

        $(".collabo-right ul li").hide().eq(idx).show()
      } else {
        $(".collabo-right ul li").show();
        // 1024px 미만에서 사용할 JavaScript
      }
    
    
    $(window).resize(function(){
        let $width = $(window).width();
        if($width < 767){
            $(".collabo-right ul li").hide().eq(idx).show()
        }else{
            $(".collabo-right ul li").show();
        }
    })

//스타일 상품 슬라이드
    
    const swiper2 = new Swiper(".swiper.product",{
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: -30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        mousewheel: {
            invert: true
        },
        
    })

//상품 선택시 실착 사진


let sel_pho = [
    "images/style/st-crella_3.jpg",
    "images/style/st-tidan_3.jpg",
    "images/style/st-loful_3.jpg",
    "images/style/st-mote_3.jpg"
]

let sel_item = [
    "images/style/st-crella_2.jpg",
    "images/style/st-tidan_2.jpg",
    "images/style/st-loful_2.jpg" ,
    "images/style/st-mote_2.jpg"
]

//스타일 상품 선택 시 변경

    $(".style .swiper-slide.content .content-wrap img").click(function(e){
        e.preventDefault()
        let d = $(this).index()
        $(".style .photo .image img").attr("src", sel_pho[d])
        $(".style .select-item .image img").attr("src", sel_item[d])
        $(".style .swiper-slide.content .content-wrap img").removeClass("on").eq(d).addClass("on")
        $(".style .other .image").hide().eq(d).show()
    })

//모달창

    $(".style .select-item .image").click(function(e){
        e.preventDefault()
        $(".window").show()
        $(".window-modal").fadeIn()
        $("html,body").css("overflow", "hidden")
    })
    $(".window-modal > a").click(function(e){
        e.preventDefault()
        $(".window").hide()
        $(".window-modal").fadeOut()
        $("html,body").css("overflow", "visible")
    })

//태블릿, 모바일 모달

$(".style .m-style-box").click(function(e){
    e.preventDefault()
    $(".window").show()
    $(".window-modal").fadeIn()
    $("html,body").css("overflow", "hidden")
})



})//jq

