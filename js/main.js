$(document).ready(function () {
    $('section#telas a').on('click', function () {
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });
});
