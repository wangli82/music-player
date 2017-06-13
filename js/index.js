;(function (){
    var $music = $('.music');
    var $play = $music.find('.play');
    var $pause = $music.find('.pause');
    var $main = $music.find('.main');
    var $lyric = $main.find('.lyric');
    var $ps = null;
    var $totalTime = $music.find('.totalTime');
    var $curTime = $music.find('.curTime');
    var $progressBar = $music.find('.bar span');
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var headHeight =  $music.find('.header')[0].offsetHeight;
    var footHeight = $music.find('.footer')[0].offsetHeight;

    $main.css({
        height : winHeight - headHeight -  footHeight - 0.8*htmlFontSize
    });

    var audio = $music.find('audio')[0];

    var data = {
        "retcode": 0,
        "code": 0,
        "subcode": 0,
        "type": 1,
        "songt": 0,
        "lyric": [
            {
                "id": 1,
                "minute": "00",
                "second": "02",
                "content": "模特"
            },
            {
                "id": 2,
                "minute": "00",
                "second": "06",
                "content": "词：周耀辉"
            },
            {
                "id": 3,
                "minute": "00",
                "second": "09",
                "content": "曲：李荣浩"
            },
            {
                "id": 4,
                "minute": "00",
                "second": "30",
                "content": "穿华丽的服装 为原始的渴望而站着"
            },
            {
                "id": 5,
                "minute": "00",
                "second": "38",
                "content": "用完美的表情 为脆弱的城市而撑着"
            },
            {
                "id": 6,
                "minute": "00",
                "second": "45",
                "content": "我冷漠的接受 你焦急的等待也困着"
            },
            {
                "id": 7,
                "minute": "00",
                "second": "52",
                "content": "像无数生存在橱窗里的模特"
            },
            {
                "id": 8,
                "minute": "01",
                "second": "00",
                "content": "除了灯以外 我还能看见什么"
            },
            {
                "id": 9,
                "minute": "01",
                "second": "04",
                "content": "除了光以外 我还能要求什么"
            },
            {
                "id": 10,
                "minute": "01",
                "second": "07",
                "content": "除了你以外 还能倚赖哪一个"
            },
            {
                "id": 11,
                "minute": "01",
                "second": "15",
                "content": "在千里以外 在呼喊的是什么"
            },
            {
                "id": 12,
                "minute": "01",
                "second": "19",
                "content": "在百年以后 想回忆的是什么"
            },
            {
                "id": 13,
                "minute": "01",
                "second": "22",
                "content": "在离开以前 能否再见那一刻"
            },
            {
                "id": 14,
                "minute": "01",
                "second": "28",
                "content": "记得 你的眼睛将会亮着"
            },
            {
                "id": 15,
                "minute": "01",
                "second": "33",
                "content": "我的手臂将会挥着"
            },
            {
                "id": 16,
                "minute": "01",
                "second": "37",
                "content": "谁说世界早已没有选择"
            },
            {
                "id": 17,
                "minute": "01",
                "second": "43",
                "content": "趁着我会喜怒你会哀乐"
            },
            {
                "id": 18,
                "minute": "01",
                "second": "48",
                "content": "唱几分钟情歌"
            },
            {
                "id": 19,
                "minute": "01",
                "second": "51",
                "content": "没什么 至少证明我们还活着"
            },
            {
                "id": 20,
                "minute": "01",
                "second": "59",
                "content": "像单纯的蝴蝶 为玫瑰的甜美而飞着"
            },
            {
                "id": 21,
                "minute": "02",
                "second": "06",
                "content": "像顽皮的小猫 为明天的好奇而睡着"
            },
            {
                "id": 22,
                "minute": "02",
                "second": "14",
                "content": "是混乱的时代 是透明的监狱也觉得"
            },
            {
                "id": 23,
                "minute": "02",
                "second": "21",
                "content": "是不能继续在橱窗里做模特"
            },
            {
                "id": 24,
                "minute": "02",
                "second": "29",
                "content": "除了风以外 我还能听到什么"
            },
            {
                "id": 25,
                "minute": "02",
                "second": "33",
                "content": "除了尘以外 我还能拒绝什么"
            },
            {
                "id": 26,
                "minute": "02",
                "second": "36",
                "content": "除了你以外 还能倚赖哪一个"
            },
            {
                "id": 27,
                "minute": "02",
                "second": "43",
                "content": "在千里以外 在呼喊的是什么"
            },
            {
                "id": 28,
                "minute": "02",
                "second": "47",
                "content": "在百年以后 想回忆的是什么"
            },
            {
                "id": 29,
                "minute": "02",
                "second": "51",
                "content": "在离开以前 能否再见那一刻"
            },
            {
                "id": 30,
                "minute": "02",
                "second": "57",
                "content": "记得 你的眼睛将会亮着"
            },
            {
                "id": 31,
                "minute": "03",
                "second": "02",
                "content": "我的手臂将会挥着"
            },
            {
                "id": 32,
                "minute": "03",
                "second": "06",
                "content": "谁说世界早已没有选择"
            },
            {
                "id": 33,
                "minute": "03",
                "second": "12",
                "content": "趁着 我会喜怒你会哀乐"
            },
            {
                "id": 34,
                "minute": "03",
                "second": "17",
                "content": "唱几分钟情歌"
            },
            {
                "id": 35,
                "minute": "03",
                "second": "19",
                "content": "没什么 至少证明我们还活着"
            },
            {
                "id": 36,
                "minute": "03",
                "second": "52",
                "content": "记得 你的眼睛将会亮着"
            },
            {
                "id": 37,
                "minute": "03",
                "second": "57",
                "content": "我的手臂将会挥着"
            },
            {
                "id": 38,
                "minute": "04",
                "second": "01",
                "content": "谁说世界早已没有选择"
            },
            {
                "id": 39,
                "minute": "04",
                "second": "08",
                "content": "趁着 我会喜怒你会哀乐"
            },
            {
                "id": 40,
                "minute": "04",
                "second": "12",
                "content": "唱几分钟情歌"
            },
            {
                "id": 41,
                "minute": "04",
                "second": "15",
                "content": "没什么 至少证明我们还活着"
            }
        ]
    };
    // function getData(){
    //     $.ajax({
    //         type : 'get',
    //         url : 'lyric1.json',
    //         cache : false,
    //         async : false,
    //         dataType : 'json',
    //         success : function (res){
    //             res.code == 0  ? data = res.lyric : void 0;
    //         }
    //     })
    // }

        function bindData(){
            var str = ''; // p , p , p
            $.each(data.lyric, function (index,item){
                str += '<p id="'+ item.id +'" sec="'+ item.second +'"  min="'+ item.minute +'" >'+ item.content +'</p>';
            });
            $lyric.html(str);
        }

    function autoPlay(){
        audio.play(); // 播放
        $(audio).on('canplay',function (){
            //console.log(audio.duration);
            $totalTime.html(formatTime(audio.duration));
            $play.css('display','none');
            $pause.css('display','block');
        });
    }
    function formatTime(s){
        // 306.7241
        var min = Math.floor(s/60);
        var sec = Math.floor(s - min*60);
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return min + ':' + sec;
    }

    function bindEvent(){
        $play.on('click',clickHandler);
        $pause.on('click',clickHandler);
    }

    function clickHandler(){
        if(audio.paused){
            audio.play();
            $pause.css('display','block');
            $play.css('display','none');
        }else{
            audio.pause();
            $pause.css('display','none');
            $play.css('display','block');
        }
    }



    function progress(){
        $ps = $lyric.find('p');
        var timer = window.setInterval(function (){
            if(audio.currentTime >= audio.duration){
                window.clearInterval(timer);
                return;
            }
            $curTime.html(formatTime(audio.currentTime));
            var widthVal = audio.currentTime/audio.duration*100 + '%';
            $progressBar.css({
                width : widthVal
            });
            var min = $curTime.html().split(':')[0];
            var sec = $curTime.html().split(':')[1];
            var $curP =  $ps.filter('[min="'+ min +'"][sec="'+ sec +'"]');

            $curP.addClass('cur').siblings().removeClass('cur');

            var $cupId = $curP.index() + 1;

            if($cupId >= 4){
                console.log(1);
                $lyric.css({
                    top :  - ($cupId - 3)*0.84 + 'rem'
                });
            }
        },1000);
    }


    window.init = function (){
       // getData();
        bindData();
        autoPlay();
        bindEvent();
        progress();
    }

})();


init();

