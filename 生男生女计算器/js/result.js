$(function () {
    $(".banner button").click(function () {
        location.href="give.html"
    });
    let num = 0;
    setInterval(function () {
        num = num + 1;
        if(num%2===0){
            $(".baby").toggleClass("bg");
        }
        $("img").css('transform', "rotate(" + 30*num+ "deg)");
    },100);
});