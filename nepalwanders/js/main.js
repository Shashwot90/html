AOS.init();
$(window).scroll(function(){
    if($(this).scrollTop() > 150)
    {
        $("header").addClass("sticky")
    }
    else {
        $("header").removeClass("sticky")
    }
})