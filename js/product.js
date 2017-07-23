document.addEventListener('DOMContentLoaded',function(){
    var oHalf = $('.half');
    var aProNav = $('.proNav ul li');
    // var arr = [0,'4.5rem','7.67rem','10.9rem','14.1rem']
    aProNav.on('click',function(){
        oHalf.css({transform:'translateX('+$(this).index()*3.2+'rem)'});
        aProNav.removeClass('active');
        $(this).addClass('active');
    })
},false);