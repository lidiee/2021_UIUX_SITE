console.log("Hi :-)")

$(function(){
    $("#fullpage").fullpage({
        menu:".navbar-nav",
        anchors:["home","read","service","store"],
        navigation:true,
        navigationPosition:'fp-right',
        navigationTooltips: ['Aēsop', 'Read','Services','Store'],
        responsiveWidth:768,

        afterLoad:function(anchorslink,index){
            console.log(`${anchorslink},${index}`)

            if(index == 1){
                $(".view01").addClass("on")
            }else{
                $(".view01").removeClass("on")
            }

            if(index == 2){
                $(".view02").addClass("on")
            }else{
                $(".view02").removeClass("on")
            }
        }
    })

    const slider = $(".slider").bxSlider({
        controls:false,
        auto:true,
        pager:false
    });
})