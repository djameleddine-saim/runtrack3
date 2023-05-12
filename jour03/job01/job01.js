$(document).ready(function(){
    $('#button').click(function(){
        $('body').append('<p>bonjour tout le monde</p>');
        $('.remove').click(function(){
            $('p').remove();
    })})
})