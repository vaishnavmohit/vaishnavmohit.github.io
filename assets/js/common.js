$(document).ready(function() {
    // Toggle abstract on click only (no hover)
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    
    // Toggle bibtex on click
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
