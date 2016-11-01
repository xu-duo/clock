window.onload = function(){
    var clock = document.getElementById('clock');
    var li = clock.getElementsByTagName('li');
    var span = clock.getElementsByTagName('span');
    for(var i=0;i<li.length;i++){
        li[i].style.transform="rotate(" + i * 30 + "deg)";
        li[i].style.WebkitTransform="rotate(" + i * 30 + "deg)";/* Safari 和 Chrome */
    }
    for(var j=0;j<span.length;j++){
        span[j].style.transform="rotate(" + j * -30 + "deg)";
        span[j].style.WebkitTransform="rotate(" + j * -30 + "deg)"; /* Safari 和 Chrome */
    }

    function oClock(){
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        var week = date.getDay();
        var weekday;
        switch(week){
            case 0: weekday = '星期天';break;
            case 1: weekday = '星期一';break;
            case 2: weekday = '星期二';break;
            case 3: weekday = '星期三';break;
            case 4: weekday = '星期四';break;
            case 5: weekday = '星期五';break;
            case 6: weekday = '星期六';break;
        }

        var Hour = document.getElementById('hour');
        var Minute = document.getElementById('minute');
        var Second = document.getElementById('second');
        var hourDeg=(minute/60)*30;
        var minuteDeg=(second/60)*6;

        Hour.style.transform="rotate("+ (hour * 30+hourDeg) + "deg)";
        Minute.style.transform="rotate("+ (minute * 6+ minuteDeg) + "deg)";
        Second.style.transform="rotate("+ (second * 6) + "deg)";

        /* Safari 和 Chrome */
        Hour.style.WebkitTransform="rotate("+ (hour * 30+hourDeg) + "deg)";
        Minute.style.WebkitTransform="rotate("+ (minute * 6+ minuteDeg) + "deg)";
        Second.style.WebkitTransform="rotate("+ (second * 6) + "deg)";

        var Time = document.getElementById('input');
        if(second.length == 1){
            Time.value = hour + ':' + minute + ':' + '0' + second;
        }else {
            Time.value = hour + ':' + minute + ':' + second;
        }

        var Week = document.getElementById('week');
        Week.value = weekday;
    }
    oClock();
    setInterval(oClock,1000);

};
