$('input[type="radio"]').on('change', function(e){
    var text = $(e.currentTarget).next().text();
    $('.fruits').text(text);
});