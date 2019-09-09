$(function () {

    class Home {
        init() {
            this.caerlist();
            this.switcher()
            this.cerpage()
            this.page()
            this.caertab()
            this.hover()
        }

        caertab() {
            // 生成页面
            $.ajax({
                type: "get",
                url: "./api/tab.json",
                // data: "data",
                dataType: "json",
                success: function (rtr) {
                    let html1 = rtr.map((ele) => {
                        let oSerc = ele.src
                        let arr = oSerc[0]
                        let res = arr.split("&")

                        console.log();

                        let html2 = ele.text.map((item) => {
                            return `<li><a href="">${item}</a></li>`
                        }).join("")
                        let html3 = ele.text2.map((el) => {
                            return `<li><a href="">${el}</a></li>`
                        }).join("")
                        return `  <div class="tab_body">
            <div class="tab_bady_list">
            <h4 class="tab_bady_tile">${ele.title}</h4>
            <ul class="tab_bady_ul">
                ${html2}
           </ul>
           <h4 class="tab_bady_tile">${ele.title2}</h4>
           <ul class="tab_bady_ul">
                 ${html3}
           </ul>
            </div>
            <div class="tab_body_img">
            <div class="tab_body_img-top">
                <img src="${res[0]}" alt="商家" class="img-top">
            </div>
            <div class="tab_body_img-cont">
                <img src="${res[1]}" alt="" class="img-cont">
            </div>
            <div class="tab_body_img-botton">
                <img src="${res[2]}" alt="" class="img-cont">
            </div>
        </div>
            </div>`
                    }).join("")
                    $(".tab_Conter").append(html1);

                }
            });

        }
        hover() {

            // 鼠标活动效果
            $(".tab_list_li").mouseenter(function () {
                let index = $(this).index();
                $(".tab_body").eq(index).addClass("avten").siblings().removeClass("avten")
                $(".tab_Conter").mouseleave(function () {
                    $(".tab_body").removeClass("avten")

                })
            })



        }
        // 页面中的水平滑动栏
        caerlist() {
            // 生成商家图片列表
            $.ajax({
                type: "get",
                url: "./api/comm.json",
                data: "data",
                dataType: "json",
                success: function (response) {
                    let html = response.map((ele) => {
                        return `  <li class="merchant_li">  
                         <a href=""> <img src=${ele.res} alt=""> 
                        </a></li>`
                    }).join("");
                    $(".merchant_ul").html(html);
                }
            });
        }
        // 水平列表的控制部分
        switcher() {
            // 商品切换部分
            /* 
            思路：
                 1.用一个父元素包裹li；移动ulleft的值实现移动    
                 2.每次页面中最多生成6个div
                 3.生成每个li
                 4.点击按钮时移动ul left的值
                 5.移动的距离为一个1200px的参照物
            */
            $.ajax({
                type: "get",
                url: "./api/setpigin.php",
                dataType: "json",
                success: function (rst) {
                    let html = rst.data.map((ele) => {
                        return `
         <li class="catalogue_ul_li"  id=${ele.cID}>
            <div class="catalogue-text">
                <div class="catalogue-img">
                    <img src="${ele.src}"
                        alt="秒杀图片">
                    <span class="catalogue-img_hint">${ele.text}</span>
                </div>
                <div class="price">￥${ele.price}</div>
                <div class="introduce">${ele.introduce}</div>
            </div>
        </li>
            `
                    }).join("")
                    $(".catalogue_ul").html(html)
                }
            });
            let iw = $(".catalogue-contt").width();
            let index = 1;

            function next() {
                index++
                $(".catalogue_ul").stop().animate({
                    'left': -index * iw
                }, 1000)
                if (index >= 18) {
                    $(".catalogue_ul").css('left', "-21600px")
                    index = 18;
                }

            }

            function prev() {
                index--
                $(".catalogue_ul").stop().animate({
                    'left': -index * iw
                }, 1000)

                if (index < 1) {
                    $(".catalogue_ul").css('left', "0px")
                    index = 1;
                }

            }
            $(".lookup").click(() => {
                prev()
            })
            $(".down").click(() => {
                next()
            })


        }
        //调用生成节点
        cerpage() {
            $("#pager").zPager({
                totalData: 15,
                htmlBox: $('#wraper'),
                btnShow: true,
                ajaxSetData: false,
                dataRender: function (data) {
                    console.log(data + '---data-2');
                    alert(data);
                },
            });
        }
        page() {
            function catal() {
                let id = $(".current").attr("page-id")
                $.ajax({
                    type: "post",
                    url: "./api/derive.php",
                    data: `orderType=${id}`,
                    dataType: "json",
                    success: function (response) {
                        let html = response.data.map((ele) => {
                            return `<div class="mian_commit_box"  id=${ele.cID}>
                        <div class="mian_commit_box_img">
                            <img src=${ele.src}
                                alt="">
                        </div>
                        <div class="mian_commit_tiem">
                            <span class="mian_commit-text">${ele.insor}</span>
                            <span class="mian_commit-are">${ele.Angell}</span>
                        </div>
                        <div class="mian_commit_bott">
                            <h2>${ele.collect}</h2>
                            <p><i></i>收藏品牌 </p>
                        </div>
                    </div>`
                        }).join("");

                        $(".mian_commit_list").html(html)
                    }
                });
            }
            catal()
            let oSpan = $(".pager").children()
            $(".pager").on("click", oSpan, function () {
                catal()
            })

        }

    }

    let home = new Home;
    home.init()

})