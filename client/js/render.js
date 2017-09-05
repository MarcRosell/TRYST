$(document).ready(function() {
    $('select').material_select();
    $('#selector option[value="3"]').attr("selected", "selected");
    $('#selector option:selected').attr("selected", null);
});

$(document).ready(function() {
    $(".reserve").hide();
});

$(document).ready(function() {
    Materialize.toast('Sort By Name', 3000, 'rounded')
});

$(document).ready(function() {
    $(".name").click(function() {
        $(".reserve").hide();
        
        var index = $(this).data('index')
        console.log(index);

        $(".detail-" + index).toggle();
    });
});

$(document).ready(function() {

    $(".modal").hide();
    $("#confirm").hide();
});

$(document).ready(function() {
    $("#openSearch").click(function() {
        $(".filters").toggleClass("hide").fadeIn("slow");
    });
});

$(document).ready(function() {
    $(".modalBtn").click(function() {
        $("#TRYST").hide();
        $("#confirm").fadeIn("slow");

    });
});

$(document).ready(function() {
    $(".clModalBtn").click(function() {
        $("#confirm").hide();
    });
});

$(document).ready(function() {
    $(".clModalBtnReturn").click(function() {
        $("#confirm").hide();
        $("#TRYST").show();
    });
});


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

/* home */

$('#search')
    .keypress(function(e) {
        if (e.which === 13) {
            $('#search').submit();
            
            return false;
        }
    });