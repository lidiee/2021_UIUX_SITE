console.log("hi :-)")


$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false,
        auto:true
    });
    $(".nextbtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevbtn").click(function(){
        slider1.goToPrevSlide();
    });

    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class");
        console.log(toggle);

        if( toggle == "toggle"){
            //$(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            //$(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });

});