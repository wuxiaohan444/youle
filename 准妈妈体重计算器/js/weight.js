$(function () {
    let height;
    let weight;
    let bmi;
    let body;
    $(".result").click(function () {
        $(".mode").show();
        $(".shade").show();
        height = +$("#height").val() / 100;
        weight = +$("#weight").val();
        bmi = (weight / (height * height)).toFixed(2);
        console.log(bmi);
        if (+bmi < 18.5) {
            body = "偏瘦"
        } else if (+bmi >= 18.5 && +bmi <= 23.9) {
            body = "标准"
        } else if (bmi > 23.9) {
            body = "偏胖"
        }
        let data = {
            bmi:bmi,
            body:body
        };
        $('.data').html(template("tpl",data));
    })
});
$(function () {
    $(".know").click(function () {
        $(".mode").hide();
        $(".shade").hide();
    })
});


$(function () {
    $(".sex button").click(function () {
        $(this).addClass("bg").siblings().removeClass("bg");
    })
});