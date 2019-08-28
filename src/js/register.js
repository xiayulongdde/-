$(function () {
    // 注册时验证用js文件
    /*思路
       1.所有文本框非空检查
       2.声明变量拿到文本的值作对比
       3.检查用户名发送ajax是否已经存在
       4.链接API发送短信
    */
    //手机号码
    var oPhoneText = "";
    //密码1
    let oPasson1 = ""
    //密码2
    let oPasson2 = "";
    //短信验证码
    let oMasgText = "";
    //拿到页面中的标签
    let phone = $("#pemail")
    let password1 = $("#password")
    let password2 = $("#password2")
    let valid = $("#validCode")


    //正则表达式
    /* 1开头 第二位3-9 后面全都是数字   11位 手机号码正则  */
    let regPhone = /^1[3-9]\d{9}$/;
    //密码正则
    let regPassword = /^[a-zA-Z0-9]{6,24}$/;




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

    empty($(".itext1"))


    function borfomr() {
        $(".itext1").focus(function () {
            $(this).css(
                "border", "1px solid  rgb(111, 188, 240)"
            )

        })
        $(".itext1").blur(function () {
            $(this).css(
                "border", "1px solid #e9e9e9"
            )
        })
    }
    borfomr()
    //监听用户名失去焦点事件发送网络请求
    let isok = false;
    phone.blur(function () {
        let oEm = $(this).parents(".item").find("em");
        oEm.removeClass("avt")
        let text = $.trim($(this).val());
        oPhoneText = text
        let msg = $(this).parents(".item").find(".msg");
        msg.css("color", "#e93a3a")
        if (text.length == 0) {
            msg.html("请输入手机号码");
        } else if (!regPhone.test(text)) {
            msg.html("手机号码格式错误");
        } else if (regPhone.test(text)) {
            $(this).css("border", "1px solid #e9e9e9");
            $.ajax({
                type: "post",
                url: "../api/insertion.php",
                data: `num=${'1'}&phone=${text}`,
                success: function (response) {
                    if (response !== 'no') {
                        oEm.addClass("avt")
                        msg.html("");
                        isok = true;
                    } else {
                        oEm.addClass()
                        msg.html("该用户已存在");
                        isok = false;
                    }
                }
            });
        }
    })
    //密码获得焦点出现提示
    function focus(index) {
        index.focus(function () {
            let msg = $(this).parents(".item").find(".msg");
            msg.css("color", "#555")
            if (index == password1) {
                msg.html("清输入6-24字母、数字");
            } else if (index == password2) {
                msg.html("请再次输入密码");
                msg.css("color", "#e93a3a")
            } else if (index == phone) {
                msg.html("为了您的账号安全，请使用常用手机")
            } else if (index == valid) {
                msg.html("验证码")
            }


        })
    }
    //提示手机事项
    focus(phone)
    focus(password1)
    //监听密码的失去焦点事件
    let isol = false;
    password1.blur(function () {
        let oEm = $(this).parents(".item").find("em");
        oEm.removeClass("avt")
        let text = $.trim($(this).val());
        oPasson1 = text
        let msg = $(this).parents(".item").find(".msg");
        msg.css("color", "#e93a3a")
        if (text.length == 0) {
            msg.html("请输入密码");
        } else if (!regPassword.test(text)) {
            msg.html("密码格式错误")
            isol = false;
        } else if (regPassword.test(text)) {
            oEm.addClass("avt")
            msg.html("");;
            isol = true;
        }
    })
    focus(password2)
    //确认密码是否正确
    let isaa = false
    password2.blur(function () {
        let oEm = $(this).parents(".item").find("em");
        oEm.removeClass("avt")
        let text = $.trim($(this).val());
        oPasson2 = text
        let msg = $(this).parents(".item").find(".msg");
        if (text.length == 0) {
            msg.html("再次输入密码不能为空")
        } else if (text === oPasson1) {
            oEm.addClass("avt")
            msg.html("");
            isaa = true
        } else if (text != oPasson1) {
            msg.html('请保持密码一致')
            isaa = false;
        }


    })
    //发送API请求短信
    $("#vcode_box a").click(function () {
        //检查手机号码是否正确
        var text = $.trim(phone.val());
        if (text.length != 0 && regPhone.test(text)) {
            function random() {
                let data = [123254, 266166, 264622, 626222, 265655, 266566, 515136, 226265, 545514, 232322, 785620, ];
                let i = parseInt(Math.random() * 10)
                let o = data[i]
                window.o = o;

            }
            random()
            var obj = {
                type: "layer-rollIn",
                title: "验证码",
                content: `<div>${"验证码"+'--'+ o}<div>`,
            };
            method.msg_layer(obj);

        } else {
            var obj = {
                type: "layer-rollIn",
                title: "温馨提示",
                content: `<div>请输入手机号码`,
            };
            method.msg_layer(obj);

        }




    })
    // 验证码
    focus(valid)
    let isdd = false;
    valid.blur(function () {
        let oEm = $(this).parents(".item").find("em");
        oEm.removeClass("avt")
        let text = $.trim($(this).val());
        oPasson1 = text
        let msg = $(this).parents(".item").find(".msg");
        msg.css("color", "#e93a3a")
        if (text.length == 0) {
            msg.html("请输入验证码！")
        } else if (text != o) {
            msg.html("验证码不匹配")
            isdd = false
        } else {
            msg.html("")
            isdd = true;
        }
    })

    //发送网络请求插入数据
    $("#reg_submit").click(function () {
        let isCheck = $("#inputacc").is(":checked")
        if (!isCheck) {
            var obj = {
                type: "layer-rollIn",
                title: "提示",
                content: "<div>请阅读用户协议",
            };
            method.msg_layer(obj);
            return
        }
        // 发送注册数据数据
        if (isok == true && isol == true && isaa == true && isdd == true) {
            $.ajax({
                type: "post",
                url: "../api/insertion.php",
                // data: `num=${'2'}&Phone=${oPhoneText}&Passon=${oPasson2}`,
                data: {
                    num: "2",
                    Phone: oPhoneText,
                    Passon: oPasson2
                },
                success: function (response) {
                    if (response !== "yes") {
                        var obj = {
                            type: "layer-rollIn",
                            title: "提示",
                            content: "<div>恭喜注册成功",
                        };
                        method.msg_layer(obj);
                        setTimeout(() => {
                            window.open("lgoin.html")
                        }, 3000);

                    } else {
                        var obj = {
                            type: "layer-rollIn",
                            title: "提示",
                            content: "<div>注册失败",
                        };
                        method.msg_layer(obj);
                    }
                }
            });
        } else {
            var obj = {
                type: "layer-rollIn",
                title: "提示",
                content: "<div>请检查申请数据格式",
            };
            method.msg_layer(obj);
        }



    })
})