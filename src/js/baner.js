/*
   1.生成页面的标签
   2.设置left的值
   3.用定时器控制轮播时间
*/
$(function () {
   class Baner {
      constructor() {
         this.oWidth = 0;
         this.box = null;
         this.init();
         this.oSapn = null
      }
      init() {
         this.creatsapn()
      }

      creatsapn() {
         // 生成页面中span标签
         $.ajax({
            type: "get",
            url: "./api/baner.json",
            dataType: "json",
            success: function (response) {
               let index = response.length
               for (let i = 0; i < index; i++) {
                  $(".baenr_button").append(`<span class="baenr_button_span"><em>${i+1}</em></span>`)
               }
            }
         });
         let aaa = $(".baenr_button")
         this.createhtml(aaa)
      }

      createhtml(aaa) {
         $.ajax({
            type: "get",
            url: "./api/baner.json",
            dataType: "json",
            success: function (response) {
               let html = response.map((ele) => {
                  return `     
                  <li class="baenr_li">
                  <a href="" class="baeenr_big_img">
                      <img src=${ele.bigimg} alt="轮播大图">
                  </a>
                     <div class="smalimg">
                      <div class="smalimg_img">
                        <img src=${ele.salmm} alt="">
                  </div>
                  <div class="smalimg-last">
                     <div class="smalimg_img">
                         <img src=${ele.salmm1} alt="">
                     </div>
                  </div>
              </li>`
               }).join("")

               function cut(change) {
                  $(".baenr_li").eq(change).fadeIn(300).siblings().fadeOut(300); //对应图片切换
               }
               $(".slider_main").html(html)
               //手动控制图片轮播
               let oSpaN1 = aaa.children()
               $(".baenr_li").eq(0).show();
               $(oSpaN1).eq(0).addClass("avteng");
               $(oSpaN1).mouseenter(function () {
                  // console.log(123)
                  $(this).addClass("avteng").siblings().removeClass("avteng")
                  let index = $(this).index();
                  cut(index)
               });
               //自动控制图片轮播
               let size = $(".baenr_li").size();
               let i = 0 //初始化
               let oSet = setInterval(move, 1500)

               function move() {
                  i++;
                  if (i == size) {
                     i = 0; //如果这是最后一张图片再按向右的按钮则切换到第一张图
                  }
                  $(oSpaN1).eq(i).addClass("avteng").siblings().removeClass("avteng"); //对应底部数字添加背景
                  cut(i)
               }
               // 进入box容器时关闭定时器
               $(".baenr").hover(function () {
                  clearInterval(oSet);
               }, function () {
                  oSet = setInterval(move, 1500)
               });

            }
         });

      }
   }
   let oBaner = new Baner()

   let sss = $(".li_cen .img_k  ")
})