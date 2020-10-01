$(function(){

$('.btn').click(function(){
    console.log('CLICK TO BUTTON');
});

$('.filter').submit(function(){
    console.log('работает Ajax');
    var $this = $(this),
    data = $this.serialize(),
    content_table = $('.table_2'),
    btn = $('.btn');

    $.ajax({ 
        url: '/c/test',
        type: 'POST',        
        data: data,
        cache: false,
        async: true,

        beforeSend: function(){
            btn.attr('disabled', true);
            content_table.fadeOut(100);
        },
        // success: function(data){
        //     $('.table_2').html(data);  
        //     content_table.delay(100).fadeIn(100, function(){
        //         btn.attr('disabled', false);     
        //     });                
        // }

        success: function(){
            $('.table_2').html('');      
            $('.table_2').load('/c/test .table_2');
            content_table.delay(100).fadeIn(100, function(){
                btn.attr('disabled', false);     
            });                
        }
        ,
        error: function(){
            alert('Error!');
        }
    });

    return false;
});


// $(document).on('submit', 'form[pjax-container]', function(event) {
//       console.log(111);
//   $.pjax.submit(event, '#pjax-container')
// })

});
