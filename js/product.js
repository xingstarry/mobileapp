Zepto(function($){
    var oHalf = $('.half');
    var aProNav = $('.proNav ul li');
    var oHotProCon = $('.hotProCon');
    aProNav.on('click',function(){
        oHalf.css({transform:'translateX('+$(this).index()*3.2+'rem)'});
        aProNav.removeClass('active');
        $(this).addClass('active');
        var i=$(this).html();
        proList(i);
    });
    // 获取产品列表函数
    var jsonPro={
        "热门":[
            {"kind":"意外险","img":"1.jpg","title":"意外盾牌","con":"保障20万身价，2万医疗费用报销","price":"120起"},
            {"kind":"旅游险","img":"2.jpg","title":"驴友旅行意外伤害保险","con":"高风险运动专项险，双重保障意外和住院","price":"6起"},
            {"kind":"车险","img":"3.jpg","title":"车险保障","con":"包含30种车险保障 保额高达30万","price":"99起"},
            {"kind":"家财险","img":"4.jpg","title":"家财守护","con":"保障20万身价，2万医疗费用报销","price":"80起"}
        ],
        "意外":[
            {"kind":"意外险","img":"1.jpg","title":"意外盾牌","con":"保障20万身价，2万医疗费用报销","price":"120起"}
        ],
        "旅行":[
            {"kind":"旅游险","img":"2.jpg","title":"驴友旅行意外伤害保险","con":"高风险运动专项险，双重保障意外和住院","price":"6起"}
        ],
        "家财":[
            {"kind":"家财险","img":"4.jpg","title":"家财守护","con":"保障20万身价，2万医疗费用报销","price":"80起"}
        ],
        "车险":[
            {"kind":"车险","img":"3.jpg","title":"车险保障","con":"包含30种车险保障 保额高达30万","price":"99起"}
        ]
    };
    function proList(index){
        oHotProCon.html('');
        $.ajax({
            url:'productData.json',
            type:'GET',
            dataType:'json',
            success:function (res) {
                var json={};
                if(res){
                    json=res[index];
                }else{
                    json=jsonPro[index];
                }
                $.each(json,function (i,v) {
                    $('<li>\
                        <a href="#">\
                            <img src="img/productImg'+v.img+'" alt="">\
                            <i>'+v.kind+'</i>\
                            <div class="proMsg">\
                                <div class="clear-fix">\
                                    <h4 class="fl">'+v.title+'</h4>\
                                    <span class="fr">¥'+v.price+'</span>\
                                </div>\
                                <p>'+v.con+'</p>\
                            </div>\
                        </a>\
                    </li>').appendTo(oHotProCon);
                })
            },
            error:function () {
                console.log('连接失败');
            }
        })
    }
    proList(aProNav.eq(0).html());
});