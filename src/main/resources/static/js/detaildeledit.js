//监听行工具事件
table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
    var data = obj.data //获得当前行数据
        ,layEvent = obj.event; //获得 lay-event 对应的值
    if(layEvent === 'detail'){
        layer.msg('查看操作');
    } else if(layEvent === 'del'){
        layer.confirm('真的删除行么', function(index){
            obj.del(); //删除对应行（tr）的DOM结构
            layer.close(index);
            //向服务端发送删除指令
        });
    } else if(layEvent === 'edit'){
        layer.msg('编辑操作');
    }
});