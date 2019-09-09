$(function () {

    class Tab {
        constructor() {
            this.init()
        }
        init() {
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
    }
    let oTab = new Tab()


})