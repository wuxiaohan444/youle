$(function () {
    $("#month").click(function () {
        $(".period").show();
    });
    $(".no").click(function () {
        $(".period").hide();
    });

    $(".box").scroll(function () {
        let top = $(".box").scrollTop();
        for (let i = 0; i < $("ul li").length - 4; i++) {
            let height = $("ul li").height();
            if (Math.round(top / height) === i) {
                switch (i) {
                    case 0:
                        $(".line").text('一月份');
                        break;
                    case 1:
                        $(".line").text('二月份');
                        break;
                    case 2:
                        $(".line").text('三月份');
                        break;
                    case 3:
                        $(".line").text('四月份');
                        break;
                    case 4:
                        $(".line").text('五月份');
                        break;
                    case 5:
                        $(".line").text('六月份');
                        break;
                    case 6:
                        $(".line").text('七月份');
                        break;
                    case 7:
                        $(".line").text('八月份');
                        break;
                    case 8:
                        $(".line").text('九月份');
                        break;
                    case 9:
                        $(".line").text('十月份');
                        break;
                    case 10:
                        $(".line").text('十一月份');
                        break;
                    case 11:
                        $(".line").text('十二月份');
                        break;
                }
            }
        }
    })
    $(".line").click(function () {
        $("#month").val($(this).text());
        $(".period").hide();
    });

    $(".inquire").click(function () {
        if($("#age").val()!==''&&$("#month").val()!==''){
            location.href="result.html?age="+$("#age").val()+"&"+"month="+ $("#month").val();
        }
        else{
            alert('数据不能为空')
        }
    })

});