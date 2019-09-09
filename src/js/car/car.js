$(function () {
    class Car {
        constructor() {
            /*要求
            核心：前端页面的数据及后端数据同时进行 
               1.全选：复选框选中时结算当前的状态：数量以及价格.
               2.删除批量删除
               2.全选反选
            */
            this.init()
        }

        init() {
            this.onclick()
            this.delete()
            this.calculator()
            this.request()
        }

        // 点击加减修改总价
        onclick() {
            function tolal(now, num) {
                let oStock = $(now).parents(".quantity").children(".stock")
                let inventory = $(now).parents(".quantity").find(".text_box1").data('mun')
                if (num > inventory) {
                    num = inventory
                    oStock.html("超出库存")
                } else if (num < 1) {
                    num = 1
                } else if (num < inventory) {
                    oStock.html("")
                }
                $(now).parents(".quantity").find(".text_box1").val(num)
                //小计
                let prcie = $(now).parents(".quantity").prev().find(".iprice").text() * 1
                let all = (num * prcie).toFixed(2);
                let totlo = $(now).parents(".quantity").next().find(".total_prices").text(all)

                function checkedArr() {
                    let arr = [];
                    $(".newslist").each(function (index, item) {
                        if ($(item).prop("checked")) {
                            arr.push(index);
                        }
                    })
                    return arr;
                }

                let chekall = checkedArr()
                let oNum = 0; //存放商品总数量
                let total = 0 //放置总价格
                chekall.forEach(function (item, index) {
                    oNum += $(".text_box1").eq(chekall[index]).val() * 1;
                    total += $(".total_prices").eq(chekall[index]).text() * 1;
                })
                $("#shuliang").html(oNum);
                $("#zong1").html(total)
            }


            //更改数据库内的值
            function ttonull(now) {

                let numval = $(now).parents(".car_king").find(".text_box1").val();
                let otable = $(now).parents(".car_king").find(".total_prices").html();
                let id = $(now).parents(".gwc_tb2").attr("id");


                // 更新购物车内部的值
                $.ajax({
                    type: "post",
                    url: "../api/car/setcarmun.php",
                    data: `numval=${numval}&otable=${otable}&id=${id}`,
                    dataType: "json",
                    success: function (response) {
                        console.log(response);

                    }
                });
            }



            // 加事件
            $(".item").on("click", ".add1", function () {
                let num = $(this).prev().val()
                num++
                tolal($(this), num)
                ttonull(this)

            })

            // 减去事件
            $(".item").on("click", ".min1", function () {
                let num = $(this).next().val()
                num--
                tolal($(this), num)
                ttonull(this)
            })

            // 手动输入
            $(".item").on("blur", ".text_box1", function () {
                let num = $(this).val()
                tolal($(this), num)
                ttonull(this)
            })


        }
        //删除购物车中的数据
        delete() {
            $(".item").on("click", ".romeve", function () {
                let isok = confirm("您确定要删我吗?")

                if (isok) {
                    $(this).parents(".gwc_tb2").remove()
                }
                if ($(".gwc_tb2").size() == 0) {
                    $(".account").hide();
                } else if ($(".gwc_tb2").size() != 0) {
                    $(".account").show();


                }
                let id = $(this).parents(".gwc_tb2").attr("id")
                $.ajax({
                    type: "post",
                    url: "../api/car/setdele.php",
                    data: `id=${id}`,
                    dataType: "dataType",
                    success: function (response) {
                        console.log(response);

                    }
                });

                function checkedArr() {
                    let arr = [];
                    $(".newslist").each(function (index, item) {
                        if ($(item).prop("checked")) {
                            arr.push(index);
                        }
                    })
                    return arr;
                }

                let chekall = checkedArr()
                let oNum = 0; //存放商品总数量
                let total = 0 //放置总价格
                chekall.forEach(function (item, index) {
                    oNum += $(".text_box1").eq(chekall[index]).val() * 1;
                    total += $(".total_prices").eq(chekall[index]).text() * 1;
                })
                $("#shuliang").html(oNum);
                $("#zong1").html(total)
            })

            let oLgin = $(".detrusion")
            let name = Cookie.getItem("name")
            if (name) {
                let oQuit = name + ` 欢迎来到折800 <a href="###" class="quit">退出</a> `
                oLgin.html(oQuit)
            }

            $(".detrusion").on("click", ".quit", function () {


                let text = $("a").html()
                if (text = "退出") {
                    Cookie.removeItem("name")
                    let ogin = `<a href="http://127.0.0.1/avten/src/subpage/lgoin.html">登录</a>
                                <a href="http://127.0.0.1/avten/src/subpage/register.html">免费注册</a> `
                    oLgin.html(ogin)
                }
            })



        }

        // 通过循环来遍历数据
        calculator() {
            function checkedArr() {
                let arr = [];
                $(".newslist").each(function (index, item) {
                    if ($(item).prop("checked")) {
                        arr.push(index);
                    }

                })
                return arr;
            }

            function allNum() {
                let chekall = checkedArr()
                let oNum = 0; //存放商品总数量
                let total = 0 //放置总价格
                chekall.forEach(function (item, index) {
                    oNum += $(".text_box1").eq(chekall[index]).val() * 1;
                    total += $(".total_prices").eq(chekall[index]).text() * 1;
                })
                $("#shuliang").html(oNum);
                $("#zong1").html(total)

            }
            // 控制全选按钮
            //本身复选框的长度
            let oLenggth = $(".newslist").size();
            //选中状态的长度
            let oAchecknum = $(".newslist:checked").size();
            if (oLenggth == oAchecknum) {
                $(".bott_check_all").prop('checked', true)
            } else {
                $(".bott_check_all").prop('checked', false)
            }

            $(".item").on("click", ".newslist", function () {
                if ($("#zong1").text() === 0) {
                    $("#jz1").show();
                    $(".jz2").hide();
                    console.log($(".jz2"));
                } else if ($("#zong1").size() != 0) {
                    $(".CNY").css("color", "#ff5500")
                    $("#jz1").hide();
                    $(".jz2").show();
                }
                allNum()
            })
            $(".top_check_all").click(function () {
                let isok = $(".bott_check_all").prop('checked')
                $(".newslist").prop('checked', isok)
                $(".bott_check_all").prop('checked', isok)
                allNum()
            })

            // 全选功能
            $(".bott_check_all").click(function () {
                let isok = $(".bott_check_all").prop('checked')
                $(".newslist").prop('checked', isok)
                $(".top_check_all").prop('checked', isok)
                allNum()
            })


            //批量删除
            $(".wholesale").click(function () {
                let chekall = checkedArr().reverse()
                let ok = confirm("确定要删除我们？")

                if (ok) {
                    chekall.forEach(function (item, index) {
                        $(".gwc_tb2").eq(chekall[index]).remove()
                    })
                }

                allNum()

                if ($(".gwc_tb2").size() == 0) {
                    $(".account").hide();
                } else if ($(".gwc_tb2").size() != 0) {
                    $(".account").show();


                }

            })


        }

        //发送网络请求请求数据库中的数据
        request() {
            $.ajax({
                type: "get",
                url: "../api/car/carnum.php",
                dataType: "json",
                success: function (response) {
                    for (let i = 0; i < 1; i++) {
                        let html = `<span calss="item-coun">${response.tatalROW}</span>`
                        $(".maycar").append(html);
                    }
                    for (let i = 0; i < 1; i++) {
                        let html1 = ` <i id="item-count">${response.tatalROW}</i`
                        $(".count").append(html1);
                    }

                }
            });

            $.ajax({
                type: "get",
                url: "../api/car/poscardata.php",
                dataType: "json",
                success: function (response) {
                    let html = response.data.map((ele) => {
                        return `    <table cellpadding="0" cellspacing="0" class="gwc_tb2" id=${ele.goodid}  >
                        <tr class="car_king">
                            <td class="tb2_td1">
                                <input type="checkbox" value="1" name="newslist" id="newslist" class="newslist" />
                            </td>
                            <td class="tb2_td2">
                                <a href="#"><img
                                        src=${ele.src} />
                                </a>
                            </td>
                            <td class="tb2_td3">
                                <a href="#">${ele.text}</a>
                            </td>
                            <td class="unit_price">
                                <div class="price_box">
                                    <span class="iprice">
                                       ${ele.ipeice}
                                    </span>
                                    <span class="lpiice">
                                            ${ele.lprice}
                                    </span>
                                </div>
                            </td>
                            <td class="quantity">
                                <input id="min1" class="min1" style=" width:20px; height:18px;border:1px solid #ccc;"
                                    type="button" value="-" />
                                <input id="text_box1" class="text_box1" data-mun="8" type="text" value="1"
                                    style=" width:30px; text-align:center; border:1px solid #ccc;" />
        
                                <input id="add1" class="add1" style=" width:20px; height:18px;border:1px solid #ccc;"
                                    type="button" value="+" />
                                <span class="stock"></span>
                            </td>
        
                            <td class="car_money">
                                <span class=" total_prices">${ele.toall}</span>
                            </td>
                            <td class="romeve">
                                <a href="###">删除</a>
                            </td>
                        </tr>
                    </table>
                        `
                    }).join("")

                    $(".item").html(html)

                }
            });


        }


    }


    let sasCar = new Car();
})