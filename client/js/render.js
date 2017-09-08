var index;

$(document).ready(function(){
    $(window).scrollTop(0);

    $('select').material_select();
    $('#selector option[value="3"]').attr("selected", "selected");
    $('#selector option:selected').attr("selected", null);

    $(".reserve").hide();
    $(".detail-0").show();

    $(".name").click(function() {
        $(".reserve").hide();

        index = $(this).data('index')
        console.log(index);

        $(".detail-" + index).toggle();
    });
    $(".hidedFilters").hide();
    $("#openSearch").click(function() {

        $(".filters").toggle("fast");
        $(".hidedFilters").toggle("fast");

    });

    $('.userNav').sideNav({
        menuWidth: 200,
        edge: 'right',
        closeOnClick: false,
        draggable: true,
    });

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