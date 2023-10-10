
// Slideshow bxSlider jQuery plugin
// This function creates a slideshow using bxSlider

$(document).ready(function() {
    $(".slide-container").bxSlider({
        auto: false,
        //startSlide: 0,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        infiniteLoop: true,
        wrapperClass: 'bx-wrapper'
    });
});




//Photo Gallery ajax request
// This function uses ajax to add an img inside an a element into the div element with an id of container

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "imgGallery.json",
        dataType: "json",
        success: function(data){
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#container").append(
                        "<a href=" + value.image + " data-lightbox=projects>" + "<img src=" + value.image + " alt=slide>" + "</a>"
                    );
                });
            });
        }
    });
});

//About Us page JS
// This uses ajax to append and h3 and dvi element using the information from the aboutUs.json file
// It then makes an accordion using the div element with the id of accordion. It makes the accordion
// collapsible, its height matches its content, and the header of each accordion tab is the h3 element

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "aboutUs.json",
        dataType: "json",
        success: function(data){
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#accordion").append(
                        "<h3>About " + value.title + "</h3>" +
                            "<div id=" + value.acc + ">" +
                                "<p>" + value.bio + "</p>" +
                            "</div>"
                    );
                });
            });
            $("#accordion").accordion({
                collapsible: true,
                header: "h3",
                heightStyle: "content"
            });
        }
    });

});


