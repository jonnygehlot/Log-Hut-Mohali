$("#bookIt").click(function () {
    $("#BookOnline").toggleClass('bringform')
    $(".overlay").css('display', 'block')
});

$(".bb span").click(function () {
    $("#BookOnline").removeClass('bringform')
    $(".overlay").css('display', 'none')
})
$(".overlay").click(function () {
    $("#BookOnline").removeClass('bringform')
    $(".overlay").css('display', 'none')
})