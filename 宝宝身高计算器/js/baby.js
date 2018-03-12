// 点击隐藏结果
$(function () {
    $(".know").click(function () {
        $(".mode").hide();
        $(".shade").hide();
    })
});

//点击男女时切换效果
$(function () {
    let my; //我的身高
    let his; //老公身高
    let front; //前一个区间
    let queen; //后一个区间
    let sex; //性别
    $(".sex button").click(function () {
        $(this).addClass("bg").siblings().removeClass("bg");
        sex = $(this).text();
    });
// 让结果出来
    $(".result").click(function () {

        my = +$("#my").val();
        his = +$("#his").val()
        console.log(my,his,sex);
        if (my !== 0 && his !== 0 && sex !== undefined) {
            $(".mode").show();
            $(".shade").show();
            if (sex === "男") {
                front = Math.round((my + his) / 2 * 1.03);
                queen = Math.round((my + his) / 2 * 1.08);
            } else if (sex === "女") {
                front = Math.round((my + his) / 2 * 0.93);
                queen = Math.round((my + his) / 2 * 0.98)
            }
            let data = {front: front, queen: queen};
            let html = template("tpl", data);
            $(".mode .data").html(html);
        }
        else {
            alert("1")
        }

    });
});
