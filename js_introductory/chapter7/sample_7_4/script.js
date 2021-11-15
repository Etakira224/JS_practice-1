var $form = $('form');
var $submit_btn = $('.submit_btn');
var $text_field = $('.text_field');

$submit_btn.prop('disabled', true);

$text_field.on('keyup', function(){
    var text_count = $text_field.val().length;
    if(text_count >= 1) {
        $submit_btn.prop('disabled', false);
    } else {
        $submit_btn.prop('disabled', true);
    }
});

$form.on('submit', function(e){
    e.preventDefault();
    alert($text_field.val()+"が送信されました");
    $text_field.val('');
});