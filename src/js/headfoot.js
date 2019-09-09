$(function () {

    $.ajax({
        type: "get",
        url: "../api/car/carnum.php",
        dataType: "json",
        success: function (response) {
            for (let i = 0; i < 10; i++) {
                let html = `<em class="mycat">${response.tatalROW}</em>`
                $(".maycart").html(html);
            }

            for (let i = 0; i < 10; i++) {
                let html = `<em >${response.tatalROW}</em>`
                $(".tab-sup-bd").html(html);
            }

        }
    })

    //购物车添加点击事件
    $(".tab-text").click(function () {
        window.location.href = `http://127.0.0.1/avten/src/subpage/car.html`
    })

    $('.back_top').click(function () {

        BackToTop({

            text: 'top',

            autoShow: true,

            appearMethod: 'fade',

            timeEffect: 500,

            effectScroll: 'linear',

            autoShowOffset: '0',

            opacity: 1,

            top: 10
        });
    })


    //如果页面有Coookie时
    let oLgin = $(".switchover")
    let name = Cookie.getItem("name")
    if (name) {
        let oQuit = name + ` 欢迎来到折800 <a href="" class="quit">退出</a> `
        oLgin.html(oQuit)
    }

    $(".switchover").on("click", ".quit", function () {
        let text = $("a").html()
        if (text = "退出") {
            Cookie.removeItem("name")
            let ogin = `<a href="http://127.0.0.1/avten/src/subpage/lgoin.html">登录</a>
                        <a href="http://127.0.0.1/avten/src/subpage/register.html">免费注册</a> `
            oLgin.html(ogin)
        }
    })

})