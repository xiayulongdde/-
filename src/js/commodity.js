$(function () {
    // 生成商家图片列表
    $.ajax({
        type: "get",
        url: "./api/comm.json",
        data: "data",
        dataType: "json",
        success: function (response) {
            let html = response.map((ele) => {

                return `  <li class="merchant_li">
                <a href="">
                    <img src=${ele.res} alt="">
                </a>
            </li>`

            }).join("");

            $(".merchant_ul").html(html);
        }
    });
    // ________________________________________________________________________________________________________________________

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
    // 移动ul的值
    // let now = 0;
    let iw = $(".catalogue-contt").width();
    // let left = $(".catalogue_ul").css('left')
    // console.log(left);

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

    // ___________________________________________________________生成列表
    $.ajax({
        type: "get",
        url: "./api/derive.php",
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

            }).join("")

            $(".mian_commit_list").html(html)
        }
    });





})