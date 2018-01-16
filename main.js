alert("WEBSITE STILL UNDER CONSTRUCTION. FORMS AND SOME LINKS MIGHT BE BROKEN. VISIT AGIN AFTER JAN 31st 2018");

$("#wrap2").owlCarousel({
    autoplay: true,
    margin: 10,
    autoplayHoverPause: true,
    center: true,
    autoWidth:true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$("#wrap5").owlCarousel({
    autoplay: true,
    margin: 10,
    smartSpeed: 500,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$("#wrap10").owlCarousel({
    autoplay: true,
    margin: 10,
    smartSpeed: 500,
    autoplayHoverPause: true,
     center: true,
    autoWidth:true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            center: true
        },
        600: {
            items: 1,
            center: true
        },
        1000: {
            items: 3
        }
    }
});


$("#js-btn").mouseover(function () {
    $("#js-img").attr("src", "images/icons8-Donate-25.png");
});


$('#exampleXXXXModal').modal({
    show: true
})
