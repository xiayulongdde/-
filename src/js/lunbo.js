function carouselimg(opt) {

    //准备默认参数
    let defualutOpt = {
        iw: 500,//宽
        ih: 300,//高
        time: 2//切换时间
    }

    //替补方案
    Object.assign(defualutOpt, opt);//用默认参数defualutOpt

    //找节点
    let box = $(defualutOpt.ele);//外层盒子
    let now = 0;
    let timer = null;


    //渲染图片
    let html = defualutOpt.imgdata.map(item => {
        return `<li><img src="${item}" alt=""></li>`;
    }).join('');

    $(box).find('.imglist ul').html(html);
    $(box).outerWidth(defualutOpt.iw);
    $(box).outerHeight(defualutOpt.ih);
    let iw = $(box).find('.imglist ul li').eq(0).outerWidth();
    // console.log(iw);
    $(box).find('.imglist ul li').css('left', iw);//所有图片放在右侧
    $(box).find('.imglist ul li:first').css('left', 0);
    //焦点生成
    let str = '';//焦点
    defualutOpt.imgdata.forEach((item, index) => {
        str += `<span>${index + 1}</span>`;
    });

    $(box).find('.light').html(str);
    function light() {
        $(box).find('.light span').eq(now).addClass('active').siblings().removeClass('active');
    }
    light();


    //运动：自动轮播
    timer = setInterval(next, defualutOpt.time * 1000);

    //下一张
    function next() {
        //旧图：可视区的往左挪动
        $(box).find('.imglist ul li').eq(now).animate({ 'left': -iw }, 1000);
        now = ++now > $(box).find('.imglist ul li').size() - 1 ? 0 : now;
        //新图
        $(box).find('.imglist ul li').eq(now).css('left', iw);
        $(box).find('.imglist ul li').eq(now).animate({ 'left': 0 }, 1000);
        light();//焦点跟随
    }
    //上一张
    function prev() {
        //旧图：可视区的往右挪动
        $(box).find('.imglist ul li').eq(now).animate({ 'left': iw }, 1000);
        now = --now < 0 ? $(box).find('.imglist ul li').size() - 1 : now;
        //新图
        $(box).find('.imglist ul li').eq(now).css('left', -iw);
        $(box).find('.imglist ul li').eq(now).animate({ 'left': 0 }, 1000);
        light();//焦点跟随
    }

    //鼠标移入停止，鼠标移出要运动
    $(box).hover(() => {
        clearInterval(timer);
    }, () => {
        clearInterval(timer);
        timer = setInterval(next, defualutOpt.time * 1000);
    });

    //左右按钮切换上下张
    $(box).find('.prev').click(() => {
        prev();
    });

    $(box).find('.next').click(() => {
        next();
    });

    //点击焦点切换图片
    $(box).find('.light').on('click', 'span', function () {
        let index = $(this).index();
        if (index > now) {
            //从右边切入
            $(box).find('.imglist ul li').eq(now).animate({ 'left': -iw }, 1000);
            $(box).find('.imglist ul li').eq(index).css('left', iw);
            $(box).find('.imglist ul li').eq(index).animate({ 'left': 0 }, 1000);
        }
        if (index < now) {
            $(box).find('.imglist ul li').eq(now).animate({ 'left': iw }, 1000);
            $(box).find('.imglist ul li').eq(index).css('left', -iw);
            $(box).find('.imglist ul li').eq(index).animate({ 'left': 0 }, 1000);
        }
        now = index;
        light();//焦点跟随
    });
}