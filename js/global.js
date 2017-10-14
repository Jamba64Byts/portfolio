$(function () {
    $('[data-toggle="popover"]').popover('enable');
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

var static = 0;

//Dev Naelson

$(function () {
    //Modo over
/*
    $('.second-list > li > a > i').hover(function () {
            $('.down').show();

        },
        function () {
            $('.down').hover(function () {
                }, function () {
                    $('.down').hide();
                }
            )


    });
*/
    var static = 0;
    $('.second-list > li > a > i').click(function () {
        static = static + 1;
        console.log(static);
        if (static === 1) {
            // $('.down').show();
            $('nav  .second-list  .btn-class-1').css('display','none');
            $('nav  .second-list  .btn-class-2').css('display','none');
            $('nav  .second-list  .btn-class-3').css('display','inline');
            $('nav  .second-list  .btn-class-4').css('display','inline');

        } else if (static === 2) {
            static = 0;
            // $('.down').hide();
            $('nav  .second-list  .btn-class-1').css('display','inline');
            $('nav  .second-list  .btn-class-2').css('display','inline');
            $('nav  .second-list  .btn-class-3').css('display','none');
            $('nav  .second-list  .btn-class-4').css('display','none');
        }
    });

    $(document).on('scroll', function () {
        var num = $(this).scrollTop();
        if (num > 0) {
            $('.down').hide();
        }

    })
});