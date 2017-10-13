$(function () {
    $('[data-toggle="popover"]').popover('enable');
});

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
            $('.down').show();

        } else if (static === 2) {
            static = 0;
            $('.down').hide();
        }
    });

    $(document).on('scroll', function () {
        var num = $(this).scrollTop();
        if (num > 0) {
            $('.down').hide();
        } else if (num <= 0) {
            $('.down').show();
        }

    })
});