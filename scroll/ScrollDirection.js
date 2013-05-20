var nowPosition = 0;
var diffPosition = 0;
var dirFlag = true;
$(window).scroll(function() {
    diffPosition = nowPosition - $(window).scrollTop();
    nowPosition = $(window).scrollTop();
    if (diffPosition > 0) {
        if (dirFlag == false) {
            dirFlag = true;
            //console.log("▽下にスクロール時の処理");
        }
    } else if (diffPosition < 0) {
        if (dirFlag == true) {
            dirFlag = false;
            //console.log("▲上にスクロールの処理");
        }
    }
});
