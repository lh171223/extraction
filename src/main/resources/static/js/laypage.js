//分页
laypage.render({
    elem: 'pageDemo' //分页容器的id
    ,count: 100 //总页数
    ,skin: '#1E9FFF' //自定义选中色值
    //,skip: true //开启跳页
    ,jump: function(obj, first){
        if(!first){
            layer.msg('第'+ obj.curr +'页', {offset: 'b'});
        }
    }
});
