$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".top_button").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1500);
    });
});

document.getElementById("homepage").onclick = function() {
  document.location.href = "../";
}

document.getElementById("aboutpage").onclick = function() {
  document.location.href = "#";
}
