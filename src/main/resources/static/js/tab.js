
//监听Tab切换
element.on('tab(demo)', function(data){
    layer.tips('切换了 '+ data.index +'：'+ this.innerHTML, this, {
        tips: 1
    });
});