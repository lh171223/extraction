//上传
upload.render({
    elem: '#uploadDemo'
    ,url: 'https://httpbin.org/post' //改成您自己的上传接口
    ,done: function(res){
        layer.msg('上传成功');
        layui.$('#uploadDemoView').removeClass('layui-hide').find('img').attr('src', res.files.file);
        console.log(res)
    }
});
