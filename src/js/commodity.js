$(function () {
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
            console.log(html);

            $(".merchant_ul").html(html);
        }
    });












})