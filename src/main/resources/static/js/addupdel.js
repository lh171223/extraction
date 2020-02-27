//监听头工具栏事件
table.on('toolbar(test)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id)
        ,data = checkStatus.data; //获取选中的数据
    switch(obj.event){
        case 'add':
            layer.msg('添加');
            break;
        case 'update':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else if(data.length > 1){
                layer.msg('只能同时编辑一个');
            } else {
                layer.alert('编辑 [id]：'+ checkStatus.data[0].id);
            }
            break;
        case 'delete':
            if(data.length === 0){
                layer.msg('请选择一行');
            } else {
                layer.msg('删除');
            }
            break;
    };
});
