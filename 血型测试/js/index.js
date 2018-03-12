$(function () {
    let my;
    let his;
    let data;
    $(".oneself,.oneselfS").click(function () {
        $(".periodO").show();
        for (let i = 0; i < $(".periodO ul li").length; i++) {
            $(".periodO li").eq(i).click(function () {
                $(".oneself").val($(this).html());
                my = $(".oneself").val();
                $(".periodO").show().hide()
            })
        }
    });

    $(".spouse,.spouseS").click(function () {
        $(".periodS").show();
        for (let i = 0; i < $(".periodS ul li").length; i++) {
            $(".periodS li").eq(i).click(function () {
                $(".spouse").val($(this).html());
                his = $(".spouse").val();
                $(".periodS").show().hide()
            })
        }
    });

    $(".no").click(function () {
        $(".period").hide();
    });


    $(".result").click(function () {
        if ($(".oneself").val() === "" || $(".spouse").val() === "") {
            alert("不能为空")
        } else {
            if (my === "A型" && his === "A型") {
                data = "A、O"
            } else if (my === "A型" && his === "B型") {
                data = "A、B、O、AB"
            } else if (my === "A型" && his === "O型") {
                data = "A、O"
            } else if (my === "A型" && his === "AB型") {
                data = "A、B、AB"
            } else if (my === "B型" && his === "B型") {
                data = "B、O"
            } else if (my === "B型" && his === "AB型") {
                data = "B、A、AB"
            } else if (my === "O型" && his === "O型") {
                data = "O"
            } else if (my === "O型" && his === "AB型") {
                data = "A、B"
            } else if (my === "AB型" && his === "AB型") {
                data = "AB、B"
            } else if (my === "B型" && his === "A型") {
                data = "A、B、O、AB"
            } else if (my === "O型" && his === "A型") {
                data = "A、O"
            } else if (my === "O型" && his === "B型") {
                data = "B、O"
            } else if (my === "AB型" && his === "O型") {
                data = "A、B"
            } else if (my === "AB型" && his === "A型") {
                data = "A、B、AB"
            } else if (my === "AB型" && his === "B型") {
                data = "A、B、AB"
            }


            $(".result .data").html(template("tpl", {data: data}));

            $(".mode").show().click(function () {
                $(".mode").hide();
            })
        }
    });
});