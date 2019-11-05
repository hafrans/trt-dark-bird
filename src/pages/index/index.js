import "./index.scss"
import "jquery"
import _ from 'lodash'
import 'layui-src'
import 'layui-src/src/css/layui.css'
layui.config({
    dir: '/static/'
})



layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#banner'
        , width: '100%' //设置容器宽度
        , arrow: 'always' //始终显示箭头
        , height:"600px",
        //,anim: 'updown' //切换动画方式
    }); 
});

layui.use('element', function(){
    var element = layui.element;
    //…
  });
