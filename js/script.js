// Paralax
function initParallax() {
    $('#home-single-post').parallax("50%", 0.3);
}

initParallax();

//
$('myTab button').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('#myTab li:last-child button').tab('show') // select last tab
$('#myTab li:nth-child(1) button').tab('show') // select first tab


// Night function
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
    })
})