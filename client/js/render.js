$(document).ready(function(){
    $(window).scrollTop(0);
});

$(document).ready(function() {
    $('select').material_select();
    $('#selector option[value="3"]').attr("selected", "selected");
    $('#selector option:selected').attr("selected", null);
});

$(document).ready(function() {
    $(".reserve").hide();
    $("#allconfirms").hide();
    $(".detail-0").show();
});

// $(document).ready(function() {
//     Materialize.toast('Sort By Name', 3000, 'rounded')
// });
var index;
$(document).ready(function() {
    $(".name").click(function() {
        $(".reserve").hide();

        index = $(this).data('index')
        console.log(index);

        $(".detail-" + index).toggle();
    });
});

// $(document).ready(function() {

//     $(".modal").hide();
// });

$(document).ready(function() {
    $("#openSearch").click(function() {
        $(".filters").toggleClass("hide").fadeIn("slow");
    });
});

$(document).ready(function() {
    $(".modalBtn").click(function() {
        console.log(index);
        console.log('fea')
        $("#allconfirms").show();
        $("#tryst-" + index).hide();
        $("#confirm-" + index).fadeIn("slow");

    });
});

$(document).ready(function() {
    $(".clModalBtn").click(function() {
        $("#confirm-" + index).hide();
    });
});

// $(document).ready(function() {
//     $(".clModalBtnReturn").click(function() {
//         $("#confirm" + index).hide();
//         $("#tryst-" + index).show();
//     });
// });


$(document).ready(function() {
    $('.userNav').sideNav({
        menuWidth: 200,
        edge: 'right',
        closeOnClick: false,
        draggable: true,
    });
})


$(document).ready(function() {
    $(".caret").remove()
});


/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$('#search')
    .keypress(function(e) {
        if (e.which === 13) {
            $('#search').submit();
            
            return false;
        }
    });

var bottom = $('#index-banner').offset().top;
$(window).on('scroll',function(){
    stop = Math.round($(window).scrollTop());
    if (stop > (bottom+30)) {
        $('.banner').addClass('banner-post');
    $('.navf2').hide('slow')
    } else {
        $('.banner').removeClass('banner-post');
      $('.navf2').show('fast');
   }

});