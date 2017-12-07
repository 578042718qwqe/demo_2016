/**
 * Created by Administrator on 2016/9/13.
 */
; (function ($) {
    var FindSure = function (conf) {
        this.confg = conf;
        this.wp = $('.wrap');
        this.lis = this.wp.find('.main li');
        this.roleArr = ['A', 'A', 'B', 'B', 'D', 'C', 'D', 'C', 'D'];
        this.arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        this.roCout = 0;
        this.intRole = '';
        this.tabCount = 0;
        this.succNum = 0;
        this.sec = '00\"00\'';
        this.media = "";
        this.hytit = '玩游戏领取爵迹电影优惠券！';
        this.pytit = '爵迹，为真相与荣誉而战，赢取电影优惠券哦！';
        this.des = '爵迹，为真相与荣誉而战';

    };
    FindSure.prototype = {
        init: function () {
            var _this = this;
            
            _this.rotateInt()

            console.log(this.wp)

            _this.yinpin();
            _this.loding();
            _this.wxShare(_this.hytit, _this.pytit, _this.des);
        },
        yinpin: function () {/*音频系统*/
            media = $('#media')[0];
            //绑定播放暂停控制
            $(".muse").bind("click", function () {
                if ($(".muse").hasClass("on") == false) {
                    $(this).addClass("on");
                    media.pause();
                }
                else {
                    $(this).removeClass("on");
                    media.play();
                }
            })
        },
        loding: function () {/*加载页面*/
            var _this = this;
            $(".zjcs").bind("tap", function () {
            
 //               _this.pvgMSg('zhengjiu');
                $('.page1').hide();
            

                $(".lodRangCont").animate({ 'width': '100%' }, 3000, function () {
                    $(".lodRangCont").css({ 'width': '0%' });
                    $(".page2").hide();
                });

            });
            _this.jiazai();
        },
        jiazai: function () {
            var _this = this;
            $('.done').bind('tap', function () {
                $(".zezhao").removeClass("dis");
                $(".page3").hide();
                _this.coutTimes();

            });
        },
        coutTimes: function () {//倒数5秒
            var _this = this;
            var curTime = new Date().getTime() + 5 * 1000;
            var nowTime = new Date().getTime();
            var theTime;
            var t = setInterval(function () {
                theTime = Math.abs(curTime - nowTime)
                _this.wp.find('.time-show span').eq(0).text(_this.addSint(theTime));
                _this.wp.find('.time-show span').eq(1).text(_this.addSSint(theTime));
                _this.addSint(curTime - nowTime)

                if (curTime - nowTime <= 0) {
                    clearInterval(t);
                    _this.wp.find('.time-show span').eq(1).text('00');
                    _this.lis.removeClass('on');

                    setTimeout(function () {
                        // $('.main li div').css('transition','all 0s')
                        _this.daoTime();
                    }, 2000)
                    _this.litap();
                }
                nowTime = new Date().getTime();
            }, 100 / 6)

        },
        daoTime: function () {
            var _this = this;
            var curTime = new Date().getTime() + 60 * 1000;
            var nowTime = new Date().getTime();
            var theTime;
            $(".zezhao").addClass("dis");
            var t = setInterval(function () {
                theTime = Math.abs(curTime - nowTime)
                _this.wp.find('.time-show span').eq(0).text(_this.addSint(theTime));
                _this.wp.find('.time-show span').eq(1).text(_this.addSSint(theTime));
                _this.addSint(curTime - nowTime)
                if (_this.succNum == 3) {
                    // alert(_this.succNum)
                    $(".zezhao-ov").removeClass("dis");
                    //======================全部配对成功
                    clearInterval(t);
                    $(".muse").addClass("on");
                    media.pause();

                    var ss1 = $('.time-show span').eq(0).text();
                    var ss2 = $('.time-show span').eq(1).text();
                    var ssx = (59 - ss1) >= 10 ? (59 - ss1) : '0' + (59 - ss1);
                    var ssc = (99 - ss2) >= 10 ? (99 - ss2) : '0' + (99 - ss2);
                    _this.sec = ssx + '\"' + ssc + '\''
                    //_this.hytit = _this.pytit = '白银祭司的阴谋没有得逞，我打败了白银祭司，用时' + _this.sec;
                    _this.hytit = _this.pytit = '爵迹，为真相与荣誉而战，我用了' + _this.sec + '战胜白银祭司，你呢？'


                    _this.wxShare(_this.hytit, _this.pytit, _this.des);
                    setTimeout(function () {
                        $(".main li.D").addClass("on");
                    }, 500);
                    setTimeout(function () {
                        $(".gameover").animate({ "right": "0" }, function () {
                            setTimeout(function () {
                                $(".gameover").animate({ "right": "-3.5rem" });
                                $(".main").addClass("out");
                                $(".game2").text(_this.sec);
                            }, 2000)
                        });
                    }, 2000);
                    setTimeout(function () {
                        $(".good").show();
                        $(".good").animate({ "top": "0" });
                        $(".g-btn").removeClass("dis");
                    }, 3000);
                };
                if (curTime - nowTime <= 0) {
                    clearInterval(t);

                    $(".muse").addClass("on");
                    media.pause();
                    $(".zezhao-ov").removeClass("dis");
                    _this.wp.find('.time-show span').eq(1).text('00');
                    // _this.lis.addClass('on');
                    //  ==================  时间到游戏结束===================

                    setTimeout(function () {
                        $(".main li").addClass("on");
                    }, 500);

                    setTimeout(function () {
                        $(".gameover").animate({ "right": "0" }, function () {
                            setTimeout(function () {
                                $(".gameover").animate({ "right": "-3.5rem" });
                            }, 2000)
                        });
                    }, 2000);

                    setTimeout(function () {
                        $(".over").removeClass("dis");
                        $(".over").animate({ "top": "0" })
                        $(".main").addClass("out");
                        $(".main li").addClass("on");
                    }, 3000)


                }
                nowTime = new Date().getTime();
            }, 100 / 6)
            _this.ks();
        },
        ks: function () {
            $(".g-btn ul li.left").bind("tap", function () {

            });
            $(".g-btn ul li.right").bind("tap", function () {
                $(".fx").show();
            })
            $(".fx").bind("tap",function () {
                $(".fx").hide();
            })
        },
        backGroundRound: function (arr) {//===============替换正式背景
            var _this = this;
            for (var i = 0; i < arr.length; i++) {
                _this.lis.eq(i).addClass(_this.roleArr[arr[i]]);
                _this.lis.eq(i).attr('data-role', _this.roleArr[arr[i]])
                // _this.lis.eq(i).find('span').last().addClass(_this.roleArr[arr[i]]);
            }

        }
        ,
        rotateInt: function () {
            var _this = this;
            var sz = _this.rondomNum(_this.arr);
            _this.backGroundRound(sz)
        },
        rondomNum: function (input) {//==========================随机
            for (var i = input.length - 1; i >= 0; i--) {
                var randomIndex = Math.floor(Math.random() * (i + 1));
                var itemAtIndex = input[randomIndex];
                input[randomIndex] = input[i];
                input[i] = itemAtIndex;
            }
            return input;
        },
        litap: function () {//=====================点击图标
            var _this = this;
            $('.main li').on('tap', function () {
                _this.tabCount++;
                if ($(this).hasClass('on')) { return }

                if (_this.tabCount > 1) {
                    if (_this.intRole == $(this).attr('data-role')) {
                        _this.succNum++;
                    } else {
                        if ($(this).hasClass('D')) {
                            $(".zezhao").removeClass("dis");
                            _this.tabCount = 0;
                        } else {
                            $(".zezhao").removeClass("dis");
                            setTimeout(function () {
                                _this.rotateMain();
                            }, 500);
                        }


                    }
                    _this.tabCount = 0;
                }
                if ($(this).hasClass('D')) {
                    $(".zezhao").removeClass("dis");

                    // ===================================此处处理D白银祭司'=
                    setTimeout(function () {
                        _this.rotateMain();
                        _this.tabCount = 0;
                    }, 500)
                }
                if ($(this).hasClass('on')) { return }
                _this.intRole = $(this).attr('data-role');
                console.log(_this.succNum)
                $(this).addClass('on');

            })
        },
        addSint: function (num) {
            if (parseInt(num / 1000) < 10) {
                return '0' + parseInt(num / 1000);
            };
            if (parseInt(num / 1000) >= 10) {
                return parseInt(num / 1000);
            };
        },
        addSSint: function (num) {
            if (parseInt(num % 1000 / 10) < 10) {
                return '0' + parseInt(num % 1000 / 10);
            };
            if (parseInt(num % 1000 / 10) >= 10) {
                return parseInt(num % 1000 / 10);
            };
        },
        rotateMain: function () {//=====================旋转180度
            var _this = this;
            _this.roCout++;
            _this.succNum = 0;
            $('.main li').removeClass('on');

            this.wp.find('.main').animate({ '-webkit-transform': 'rotateZ(' + _this.roCout * 180 + 'deg)' }, 2000, function () {

                if (_this.roCout % 2 == 0) {
                    $('.main li').css({ '-webkit-transform': 'rotateZ(' + _this.roCout * 180 + 'deg) rotateY(180deg)' });

                }
                if (_this.roCout % 2 != 0) {
                    $('.main li').css({ '-webkit-transform': 'rotate(' + (_this.roCout + 1) * 180 + 'deg) rotateX(180deg)' })
                }
                $(".zezhao").addClass("dis");
            });

        },
        wxShare: function (hytitle, pytitle, description) {

            var _this = this;
            wx.config(_this.confg);

            wx.ready(function () {

                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

                // 分享到朋友圈”按钮点击状态及自定义分享内容接口
                wx.onMenuShareTimeline({
                    title: pytitle, // 分享标题
                    link: 'http://h5.wulifun.cn/jueji', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/jueji/static/images/chat.jpg', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        $.ajax({
                            type: 'get', url: 'http://h5.wulifun.cn/jueji/record?choice=timeline', success: function (data) {
                                location.href = 'http://h5.wulifun.cn/jueji/qr';
                            }
                        })
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage({
                    title: hytitle, // 分享标题
                    desc: description, // 分享描述
                    link: 'http://h5.wulifun.cn/jueji', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/jueji/static/images/chat.jpg', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        $.ajax({
                            type: 'get', url: 'http://h5.wulifun.cn/jueji/record?choice=sendmsg', success: function (data) {
                                location.href = 'http://h5.wulifun.cn/jueji/qr';
                            }
                        })
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //空间
                wx.onMenuShareQZone({
                    title: pytitle, // 分享标题
                    desc: description, // 分享描述
                    link: 'http://h5.wulifun.cn/jueji', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/jueji/static/images/chat.jpg', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        $.ajax({
                            type: 'get', url: 'http://h5.wulifun.cn/jueji/record?choice=kongjian', success: function (data) {
                                location.href = 'http://h5.wulifun.cn/jueji/qr';
                            }
                        })
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

            });

        },
        pvgMsg: function (type) {
          $.ajax({
                type: 'get', url: 'http://h5.wulifun.cn/jueji/record?choice=dianji_'+type, success: function (data) {
                   
                }
            })
        },



    };
    window.FindSure = FindSure;
})(Zepto)
