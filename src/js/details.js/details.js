$(function () {
    class Details {
        constructor() {
            this.init();
        }
        /*
        1.页面属性框点击时出现一个红色边框
        2.当点击购物车时出现一个居中的提示框页面时
        3.点击购买时显示一个提示登录的信息窗口
        3.小窗口点击时将图片复制到放大镜中
        */

        init() {
            this.chenborder();
            this.addandsubtract()
            this.parties()
            this.duplication()
            this.searchid()
            this.searhtml();

        }

        //点击添加一个边框
        chenborder() {
            let oLea = $(".sule ")
            oLea.click(function () {
                $(this).addClass("avton").siblings().removeClass("avton");

            })
        }

        // 点击对数据添加或者更改，
        addandsubtract() {
            //减数量的的点击事件
            $(".decrease").click(function () {
                let value = $(".quantity").val() - 1
                if (value <= 0) {
                    value = 1;
                }
                $(".quantity").val(value)
            })

            //加数量的点击事件
            $(".increase").click(function () {
                let oVlue = Number($(".quantity").val()) + 1;
                $(".quantity").val(oVlue)
            })


        }



        // 点击图片是将图片的路径复制到页面中
        duplication() {
            $(".commit").click(function () {
                $(this).addClass("avton").siblings().removeClass("avton")
                let oCsrc = $(".commit_src").attr("src")
                $(".small-img").eq(0).find("img").attr("src", oCsrc)
                $(".images-cover").find("img").attr("src", oCsrc)
            })

        }


        // 根据id去查对应的数据渲染页面
        searhtml() {
            let res = window.location.search.substring();
            let gid = res.split("=")[1];
            $.ajax({
                type: "post",
                url: "../api/posdeli.php",
                data: `id=${gid }`,
                dataType: "json",
                success: function (response) {
                    let html = response.data.map((ele) => {
                        return `<em>${ele.text}</em>`
                    }).join("")
                    $(".main_presentation_tile").html(html)

                    let html1 = response.data.map((ele) => {
                        return `¥<i class="ilprice">${ele.promotion}</i>`
                    }).join("")
                    $(".lprice").html(html1)

                    let html2 = response.data.map((ele) => {
                        return `¥<i>${ele.lprice}</i>`
                    }).join("")
                    $(".js_org_price").html(html2)
                }
            });
        }



        //根据id值查找对应的数据
        searchid() {
            let res = window.location.search.substring();
            let id = res.split("=")[1];
            $.ajax({
                type: "post",
                url: "../api/posdet.php",
                data: `id=${id}`,
                dataType: "json",
                success: function (response) {

                    console.log(response);

                    // 接收传过来的数据过来
                    let oBimg = response.data[0].Ceconimg
                    let oSimg = response.data[0].simg
                    let oBigarr = oBimg.split("?")
                    let oSimgarr = oSimg.split("?")


                    // 渲染页面
                    let html = oBigarr.map((ele) => {
                        return ` <li class="tb-selected">
                        <div class="tb-pic tb-s40">
                            <a href="###">
                                <img src="${ele}" mid="${ele}" big="${ele}" calss="smlidimg"  >
                            </a>
                        </div>
                    </li>`
                    }).join("")
                    $(".tb-thumb").html(html)

                    // 渲染页面
                    let html1 = oSimgarr.map((ele) => {
                        return ` <li class="commit">
                        <a href="###" vpicture="800x800.433b6aa5b2608788ff7a3a315fbafb31.jpg">
                            <img src="${ele}"
                                alt="" class="commit_src">
                        </a>
                    </li>`
                    }).join("")
                    $(".smlliimg").html(html1)

                    $("#thumblist").on('click', ".tb-s40", function () {
                        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
                        $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
                        $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
                    });




                }






            });

        }


        // 根据数据
        parties() {
            //获取页面中的商品ID
            let res = window.location.search.substring();
            let gid = res.split("=")[1];
            let prompts = $(".prompts")
            let lprice = $(".ilprice").text();

            let commit = new Promise(resolved => {
                $.ajax({
                    type: "post",
                    url: "../api/posdeli.php",
                    data: `id=${gid }`,
                    dataType: "json",
                    success: function (response) {
                        resolved(response)

                    }
                });


            })

            commit.then((rte) => {
                console.log(rte.data);
                //活动后价格
                let promotion = rte.data[0].promotion
                // 商品对应id
                let goodid = rte.data[0].cID
                // 活动前价格
                let lprice = rte.data[0].lprice
                //商品介绍
                let text = rte.data[0].text
                // 商品路径
                let scr = rte.data[0].src
                console.log(scr, text);

                $(".shopping_car").click(function () {
                    $.ajax({
                        type: "post",
                        url: "../api/car/carnum.php",
                        data: `promotion=${promotion}&goodid=${goodid}&lprice=${lprice}&text=${text}&src=${scr}`,
                        dataType: "dataType",
                        success: function (response) {
                            resolved(response);

                        }
                    });
                    prompts.slideToggle(100);

                })



            })






            $(".close").click(function () {
                $(prompts).hide();
            });
            $(".skipcar_li_last").click(function () {
                $(prompts).hide();
            });
            // 去到购物车界面关闭弹出界面
            $(".skipcar_li").click(function () {
                window.open("http://127.0.0.1/avten/src/subpage/car.html")
                $(prompts).hide();
            })

        }

    }








    let aetails = new Details();

})