document.addEventListener('DOMContentLoaded',function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        loop: true, // 无限滚动
        pagination: '.swiper-pagination' // 如果需要分页器
    })
},false);