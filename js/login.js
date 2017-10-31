Zepto(function($){
    var timer=null;
    var oHint=$('.hint');
    var oLogin=$('#login');
    var oSignup=$('#signup');
    var loginReg={                                  // 登录正则
        user:/^[1-9]\d{10}$/,
        pass:/^\w{6,14}$/
    };
    function yanzheng(form,aInp,reg) {
        $.each(aInp,function (i,v) {
            $(v).on('blur',function () {                // 失去焦点
                testObj($(this));
            })
        });
        form.on('submit',function () {               // 提交
            var n=0;
            $.each(aInp,function (i,v) {
                if(testObj($(this))){
                    n++;
                }
            });
            if(n!= aInp.length){
                return false;
            }
        });
        function testObj(obj){                          // 登录检验
            clearTimeout(timer);
            var str=$.trim(obj.val());
            if(!str){
                if(obj.attr('name')=='user'){
                    oHint.css('display','block').html('手机号不能为空');
                }else if(obj.attr('name')=='pass'){
                    oHint.css('display','block').html('密码不能为空');
                }
                timer=setTimeout(function () {
                    oHint.hide()
                },2000);
                return;
            }
            if(reg[obj.attr('name')].test(str)){
                return true;
            }else{
                oHint.css('display','block').html(obj.attr('data-err'));
                timer=setTimeout(function () {
                    oHint.hide()
                },2000);
            }
        }
        clearTimeout(timer);
    }
    /*****************登录*******************/
    var oLoginF=$('#loginF');
    var aLoginInput=$('#loginBox input');
    yanzheng(oLoginF,aLoginInput,loginReg);

    /*****************注册*******************/
    var oReturn2login=$('#return2login');
    var oToSign=$('.toSign');
    var oSignupF=$('#signupF');
    var aSignupInput=$('#signupBox input');
    oToSign.on('click',function () {
        oSignup.css({left:0});
        oHint.hide();
    });
    oReturn2login.on('click',function () {
        oSignup.css({left:'16rem'});
        oHint.hide();
    });
    yanzheng(oSignupF,aSignupInput,loginReg);
});

