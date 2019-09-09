$(function () {

    class List {
        constructor() {

        }
        init() {
            this.careHTMl()
            this.carelist02()
            this.carelist03()
            this.carelist04()
            this.carelist05()
            this.carelist06()
            this.carelist01()
            this.inquire()
            this.term()
        }



        // 渲染页面
        careHTMl() {
            $.ajax({
                type: "get",
                url: "../api/getactivity.php",
                dataType: "json",
                success: function (rte) {
                    let html = rte.data.map((ele) => {
                        return `  <li class="product_list_cont_li" id=${ele.cID}>
                        <div class="product_list_cont_box">
                            <div class="product_list_cont_img">
                                <img src=${ele.src}
                                    alt="">
                            </div>
                            <h2 class="product_list_cont_h2">
                                <a href="">${ele.text}</a>
                            </h2>
                            <h4 class="product_list_cont_h4">
                                <i>￥</i>
                                <em>${ele.promotion}</em>
                                <span>￥${ele.lprice}</span>
                                <div class="promotion">${ele.iprice}</div>
                                <div class="fate">仅剩4天</div>
                            </h4>

                            <div class="product_list_cont_botton">
                                <p class="product_list_cont_botton_list">
                                    <span>包邮</span>
                                    <i></i>
                                    <span>返积分</span>
                                    <i></i>
                                    <span>退货铺贴优惠卷</span>
                                </p>
                                <span class="product_list_cont_botton_span">收藏<i>[详情]</i></span>
                            </div>
                        </div>
                    </li>`
                    }).join("")

                    $(".product_list_cont_ul").html(html)

                }
            });

        }
        // 生成底部列表页
        carelist01() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list01.json",
                dataType: "json",
                success: function (response) {
                    let html = response.map((ele) => {


                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_one").html(html)
                }
            });
        }
        carelist02() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list02.json",
                dataType: "json",
                success: function (response) {

                    let html = response.map((ele) => {

                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_02").html(html)
                }
            });
        }
        carelist03() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list03.json",
                dataType: "json",
                success: function (response) {

                    let html = response.map((ele) => {

                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_03").html(html)
                }
            });
        }
        carelist04() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list04.json",
                dataType: "json",
                success: function (response) {
                    let html = response.map((ele) => {

                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_li_04").html(html)
                }
            });
        }
        carelist05() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list05.json",
                dataType: "json",
                success: function (response) {
                    let html = response.map((ele) => {

                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_li_05").html(html)
                }
            });

        }
        carelist06() {
            $.ajax({
                type: "get",
                url: "../api/listbox.json/list06.json",
                dataType: "json",
                success: function (response) {
                    let html = response.map((ele) => {

                        return `<li class="links_list_li">
                        <div class="links_list_img">
                            <img src=${ele.src}
                                alt="">
                            <div class="links_introduce">${ele.text}</div>
                        </div>
                        <div class="links_list_text">
                            优惠价
                            <span class="links_list_span">
                                ￥
                                <em>${ele.price}</em>
                            </span>
                        </div>
                    </li>`
                    }).join("")
                    $(".links_list_li_06").html(html)
                }
            });

        }
        // 模糊查询
        inquire() {
            $(".aaa").eq(0).addClass("find")
            $(".ascending").eq(0).addClass("find")

            // 页面排他效果
            $(".inquire_list li").click(function () {

                $(this).addClass("find").siblings().removeClass("find")
            })
            // 升序
            $(".ascending").click(function () {
                let index = $(this).index()
                $.ajax({
                    type: "post",
                    url: "../api/rank.php",
                    data: {
                        index: index
                    },
                    dataType: "json",
                    success: function (rte) {
                        let html = rte.data.map((ele) => {
                            return `  <li class="product_list_cont_li" id=${ele.cID}>
                            <div class="product_list_cont_box">
                                <div class="product_list_cont_img">
                                    <img src=${ele.src}
                                        alt="">
                                </div>
                                <h2 class="product_list_cont_h2">
                                    <a href="">${ele.text}</a>
                                </h2>
                                <h4 class="product_list_cont_h4">
                                    <i>￥</i>
                                    <em>${ele.promotion}</em>
                                    <span>￥${ele.lprice}</span>
                                    <div class="promotion">${ele.iprice}</div>
                                    <div class="fate">仅剩4天</div>
                                </h4>
    
                                <div class="product_list_cont_botton">
                                    <p class="product_list_cont_botton_list">
                                        <span>包邮</span>
                                        <i></i>
                                        <span>返积分</span>
                                        <i></i>
                                        <span>退货铺贴优惠卷</span>
                                    </p>
                                    <span class="product_list_cont_botton_span">收藏<i>[详情]</i></span>
                                </div>
                            </div>
                        </li>`
                        }).join("")

                        $(".product_list_cont_ul").html(html)

                    }
                });

            })
        }

        //跳转至列表页
        term() {
            $(".product_list_cont_ul").on("click", ".product_list_cont_li", function () {
                let id = $(this).attr("id")
                window.location.href = `http://127.0.0.1/avten/src/subpage/details.html?id=${id}`
            })
        }

    }





    let list = new List
    list.init()
})