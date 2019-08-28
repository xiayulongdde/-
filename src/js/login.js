$(function () {
    /* 
   1.发送网络请求检查数据库是否有改数据
   2.通过网络请求的返回值判断是否登录成功
   3.弹框提示状态
  */
    let urmeval = "";
    let oPassval = "";

    //1.拿到页面里的值
    let oMane = $("#log_uremane");
    let oPass = $("#log_password");
    //1.失去焦点时获取文本的值
    oMane.blur(function () {
        let text = $.trim($(this).val())
        urmeval = text;
    });

    oPass.blur(function () {
        let text = $.trim($(this).val())
        oPassval = text;
    })


    function empty(indxe) {
        indxe.each(function () {
            var vdefault = this.value;
            $(this).focus(function () {
                //获得焦点时，如果值为默认值，则设置为空
                if (this.value == vdefault) {
                    this.value = "";
                }
            });
            $(this).blur(function () {
                //失去焦点时，如果值为空，则设置为默认值
                if (this.value == "") {
                    this.value = vdefault;
                }

            })
        });
    }
    empty(oMane)

    $(".login-butt").click(function () {
        Cookie.setItem('name', urmeval, 3)
        if (urmeval.length != 0 && oPassval.length != 0) {
            $.ajax({
                type: "post",
                url: "../api/login.php",
                data: `logaman=${urmeval}&logpaw=${oPassval}`,
                success: function (response) {
                    if (response != "no") {
                        var obj = {
                            type: "layer-rollIn",
                            title: "温馨提示",
                            content: `<div>登录成功2秒后进入首页`,
                        };
                        method.msg_layer(obj);
                        setTimeout(() => {
                            window.open("http://127.0.0.1/avten/src/home.html")
                        }, 2000);
                    } else {
                        var obj = {
                            type: "layer-rollIn",
                            title: "温馨提示",
                            content: `<div>请核对用户名或者密码是否正确`,
                        };
                        method.msg_layer(obj)
                    }

                }
            });
        } else {
            var obj = {
                type: "layer-rollIn",
                title: "温馨提示",
                content: `<div>请输入已经注册好的通行证`,
            };
            method.msg_layer(obj);

        }


    })






})