$(document).ready(function() {
    $('select').material_select();
      $('#selector option[value="3"]').attr("selected", "selected");
  $('#selector option:selected').attr("selected",null);
});

$(document).ready(function(){

        $(".details").hide();


});

$(document).ready(function(){
    $(".name").click(function(){
        $(".details").toggle();
    });
});


$(document).ready(function(){

        $(".modal").hide();
        $("#confirm").hide();
});


$(document).ready(function(){
    $(".modalBtn").click(function(){
        $("#TRYST").hide();
        $("#confirm").show();

    });
});

const btnopen = document.getElementById('info-activate')
const btnClose = document.getElementById('btnClose') 
btnopen.onclick = function () {
   modal.style.display = 'block'
}

btnClose.onclick = function () {   
modal.style.display = 'none' 
}

$(document).ready(function() {
  $('#selector option[value="3"]').attr("selected", "selected");
  $('#selector option:selected').attr("selected",null);
});
