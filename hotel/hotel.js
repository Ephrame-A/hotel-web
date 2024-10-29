$("document").ready(function(){

$("#brand").mouseenter(function(){
    $("#navmenu").slideToggle()
    $("li").eq(1).css("color", "red")
})
$("#body").mouseenter(function(){
    $("#container").find("img").fadeIn(1000)
});
$(window).on('scroll', function() {
$(".animated").each(function(){
    const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom) {
                $(this).addClass('visible');
            }
})
});
$(".header").find("a").hover(function(){
    $(this).css("color", "white")
}, function(){
    $(this).css("color", "yellow")
})
$("#register").click(
    function(){
        $("#body").addClass("d-none")
       $("form").removeClass("d-none")
        
    }
);
$("[type='submit']").click(
    function(){
       //preventDefault();
        $("form").addClass("d-none")
        $("#body").toggleClass("d-none");
        $("#register").toggleClass("d-none")
    alert("you have successfuly registered")
    }
)
})
