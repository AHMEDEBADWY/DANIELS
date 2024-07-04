
// window.addEventListener("load",function(){
    
//     $(".layer").fadeOut(1000 ,function(){
//         $("body").css("overflow","auto")
//     })

// })

$(document).ready(function(){

$(".layer").fadeOut(1000 ,function(){
         $("body").css("overflow","auto")
})
            
const homeOffset = $("#About").offset().top
const scrollHeight = $(".navbar").innerHeight();
$(window).scroll(function(){
    // console.log($(window).scrollTop());
if($(window).scrollTop() > homeOffset - scrollHeight){
    $(".navbar").css("backgroundColor","rgba(255, 255, 255, 0.337)");
    $(".arrowUpAndDown").fadeIn(1000).css("display","flex")
}else{
    $(".navbar").css("backgroundColor","white");
    $(".arrowUpAndDown").fadeOut(1000)
}
});
$(".arrowUpAndDown").click(function(){
    $("html,body").animate({scrollTop:0},10000)
})

$("nav ul a").not("#google").click(function(){
    const idLinks =  $(this).attr("href")
    console.log(idLinks);
    const offsetNavbar= $(idLinks).offset().top
    // $(window).scrollTop(offsetNavbar)
    $("html,body").animate({scrollTop:offsetNavbar},2000)
})

        
})


