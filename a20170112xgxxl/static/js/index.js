/**
 * Created by Administrator on 2016/10/17 0017.
 */
;(function ($) {
    var FindSure=function (conf) {
        this.confg=conf;
        this.name="";
        this.hytit='你收到一份～戚薇生日邀请函';
        this.pytit='你收到一份～戚薇生日邀请函';
        this.des='10月26日，七哥生日会来啦~七哥说想要吃水果蛋糕，快来帮《鲜果消消乐》兔叽送一个蛋糕给七哥当生日礼物吧~';
    };
    FindSure.prototype={
        init:function () {
            var _this = this;
            _this.weixin();
            _this.wxShare(_this.hytit,_this.pytit,_this.des);
            _this.tuodong();
        },

        tuodong:function () {/*================window 页面禁止花屏====================*/
            window.addEventListener('touchmove', function(event) {
                event.preventDefault();
            }, false);
        },

        weixin:function () {/*================判断是否微信登陆====================*/
            var _this = this;
            function isWeiXin() {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    return true;
                } else {
                    return false;
                }
            }
            /*if(isWeiXin()){
                _this.sliding();
                _this.yinpin();
            }else{
                $(".bg").remove();
                $("body").append("<div class='bug'></div>");
                //_this.sliding();
                //_this.yinpin();
            }*/
            _this.page1();
            _this.yinpin();
        },
        yinpin: function () {/*==================音频系统======================*/
        media = $('#media')[0];
        media.play();
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
        page1:function () {/*================第一个页面====================*/
            var _this = this;
            $("#pageview1-1").bind("tap",function () {
                if($(".pageview1-1-b").hasClass("on")){
                    $("#pageview1-1").hide();
                    $(".pageview1-2").show();
                }else {
                    $(".pageview1-1-a").hide();
                    $(".pageview1-1-b").addClass("on").show();
                    $(".header").hide();
                }
            });
            $(".page1-btn-an").bind("tap",function () {
               $(".page1-btn").hide();
               $(".page1-btn-an").hide();
               setTimeout(function () {
                   $(".pageview1-bg").show();
                   $(".pageview1-bg-icon").show();
                   $(".lunpan-2").show();
               },500);
                _this.sjanwer();
            });
            $(".pageview1-bg-open").bind("click",function () {
                $(".answer-all-bg").show();
                $(".pageview1").hide();
                /*$.ajax({
                    type: 'POST',
                    url: 'http://h5.wulifun.cn/xgxxl/new_year/lottery',
                    success: function (s) {
                        console.log(s);
                    }
                });*/
                _this.suiji(3);/*ajax获取数据*/
            });
        },
        sjanwer:function () {//============随机选取3个数==============//
            var arr = ["恭喜 啵啵啵啵啵获得了188元的鲜萌兔叽公仔一只", "恭喜 lvy获得了188元的鲜萌兔叽公仔一只", "恭喜 包子获得了188元的鲜萌兔叽公仔一只", "恭喜 bear颜获得了188元的鲜萌兔叽公仔一只", "恭喜 bai获得了188元的鲜萌兔叽公仔一只","恭喜 李诗雅获得了188元的鲜萌兔叽公仔一只","恭喜 Alex获得了188元的鲜萌兔叽公仔一只","恭喜 Carkin获得了188元的鲜萌兔叽公仔一只","恭喜 Kit.C获得了188元的鲜萌兔叽公仔一只","恭喜 Toreador雯雯获得了188元的鲜萌兔叽公仔一只","恭喜 Felix_CY获得了188元的鲜萌兔叽公仔一只","恭喜 Joker获得了188元的鲜萌兔叽公仔一只","恭喜 大川_嫩爷获得了188元的鲜萌兔叽公仔一只","恭喜 浅野启介获得了188元的鲜萌兔叽公仔一只","恭喜 大魔王.获得了188元的鲜萌兔叽公仔一只","恭喜 天堂在我左右获得了188元的鲜萌兔叽公仔一只","恭喜 Dstar获得了188元的鲜萌兔叽公仔一只","恭喜 Dante获得了188元的鲜萌兔叽公仔一只","恭喜 yuti勇公子获得了188元的鲜萌兔叽公仔一只","恭喜 疯子获得了188元的鲜萌兔叽公仔一只"];

            function you(input) {
                for (var i = input.length - 1; i >= 0; i--) {
                    var randomIndex = Math.floor(Math.random() * (i + 1));
                    var itemAtIndex = input[randomIndex];
                    input[randomIndex] = input[i];
                    input[i] = itemAtIndex;
                }
                return input;
            }
            you(arr);
            for(var i =0; i<arr.length; i++){
                $("#oDiv ul li").eq(i).text(you(arr[i]));
            }
        },
        suiji:function (e) {/*==================随机页面======================*/
            var _this = this;
            $(".answer"+e).show();
            _this.qiangpin();
            _this.share();
            _this.download();
        },
        qiangpin:function(){/*==================奖品页面======================*/
            var _this = this;
            $(".answer-btn-r").bind("click",function () {
                $(".answer-btn-r").parents(".fu").hide();
                $(".prize"+1).show();
                return false;
            });
            _this.tijiao(3);/*ajax获取数据*/
        },
        tijiao:function (e) {/*==================提交成功======================*/
            $(".cg-bttom").bind("click",function () {
                $(".prize1").hide();
                $(".answer6").show();
            })
        }
        ,
        share:function () {/*================分享页面====================*/
            $(".answer-btn-l").bind("tap",function () {
                $(".share").show();
                $(".share-tuzi").show();
            });
            $(".share,.share-tuzi").bind("tap",function () {
                $(".share,.share-tuzi").hide();
            })
        },

        download:function () {/*================下载页面====================*/
            $(".prize1-2,.answer6-btn-r").bind("tap",function () {
                location.href = "http://xgx.wulifun.com/";
                $(".share").show();
                $(".download").show();
            });
            $(".answer-btn-r3").bind("tap",function () {
                var copy = $(".copy-num").val();
                $(".answer1-tanchuang-w").text(copy);
                $(".answer1-tanchuang").show();
                $(".answer-bg").show();
                $(".answer-all-bg").hide();
            });
            $(".answer1-tanchuang").bind("tap",function () {
                location.href = "http://xgx.wulifun.com/";
                $(".share").show();
                $(".download").show();
            });
            /*$(".answerl-c").bind("tap",function () {
                var e=document.getElementById("copy-num");//对象是copy-num1
                e.select(); //选择对象
                document.execCommand("Copy"); //执行浏览器复制命令
                alert("复制成功");
            });*/
            
            
            $(".share,.download").bind("tap",function () {
                $(".share,.download").hide();
            })
        },
        wxShare:function (hytitle,pytitle,description) {

            var _this=this;
            wx.config(_this.confg);

            wx.ready(function(){

                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

                // 分享到朋友圈”按钮点击状态及自定义分享内容接口
                wx.onMenuShareTimeline({
                    title: pytitle, // 分享标题
                    link: 'http://h5.wulifun.cn/xgxxl', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/xgxxl/static/images/fenxiang.png', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage({
                    title: hytitle, // 分享标题
                    desc: description, // 分享描述
                    link: 'http://h5.wulifun.cn/xgxxl', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/xgxxl/static/images/fenxiang.png', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //空间
                wx.onMenuShareQZone({
                    title: pytitle, // 分享标题
                    desc: description, // 分享描述
                    link: 'http://h5.wulifun.cn/xgxxl', // 分享链接
                    imgUrl: 'http://h5.wulifun.cn/xgxxl/static/images/fenxiang.png', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数

                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

            });

        }


        /*=================end=================*/
    };
    window.FindSure=FindSure;
})(Zepto);
