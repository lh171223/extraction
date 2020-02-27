//将日期直接嵌套在指定容器中
var dateIns = laydate.render({
    elem: '#laydateDemo'
    ,position: 'static'
    ,calendar: true //是否开启公历重要节日
    ,mark: { //标记重要日子
        '0-10-14': '生日'
        ,'2020-01-18': '小年'
        ,'2020-01-24': '除夕'
        ,'2020-01-25': '春节'
        ,'2020-02-01': '上班'
    }
    ,done: function(value, date, endDate){
        if(date.year == 2017 && date.month == 11 && date.date == 30){
            dateIns.hint('一不小心就月底了呢');
        }
    }
    ,change: function(value, date, endDate){
        layer.msg(value)
    }
});
