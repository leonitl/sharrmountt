var modal = document.getElementById('id01');
        
window.onclick = function(event) {
    if (event.target == modal) {
            modal.style.display = "none";
    }
}

$('.message a').click(function(){
$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$( "#datepicker" ).datepicker({ minDate: 0});