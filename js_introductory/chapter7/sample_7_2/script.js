var $text_field = $('.text_field');
var $text_count = $('.text_count');

$text_field.on('keyup', function(){
    var text = $text_field.val();
    $text_count.text(text.length);
});