$(function(){
// console.log(111);
// $('.btn').click(function(){
//     console.log('CLICK TO BUTTON');
// });
$('.filter').submit(function(){
    console.log('работает Ajax');
    var $this = $(this),
    data = $this.serialize(),
    content_table = $('.content_table'),
    btn = $('.btn');

    $.ajax({ 

        url: '/c/test',
        type: 'POST',
        data: data,
        cache: false,
        async: true,

        beforeSend: function(){
                // btn.attr('disabled', true);
                // content_table.fadeOut(1);
            },
            success: function(){
                $('.table_2').html('');
          // $('.table_2').text(data);

          $('.table').load('/c/test .table_2');
            //     content_table.delay(1).fadeIn(1, function(){
            //         btn.attr('disabled', false);     
                                //     });                
                            }
                            ,

        error: function(){
            alert('Error!');
        }
    });

return false;
});

});
