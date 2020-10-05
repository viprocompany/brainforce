$(function () {
    $(".btn").click(function () {
        id_click = $(this).attr("class");
        console.log("класс куда кликнули = " + id_click);
    });
    // if (id_click == 'btn btn-outline-danger') {
    //     // $(document).pjax('.btn-outline-dark', '#pjax-container', {
    //     //     fragment: '#pjax-container'
    //     // });
    //     //   $(document).on("submit", "#form", function (event) {
    //     // event.preventDefault();
    //     // $.pjax.submit(event, "#pjax-container");
    //     //   });
    //     $(document.body).on("submit", "#form", function (event) {
    //         return false; // stop default submit behavior when it bubbles to <body>
    //         $.pjax.submit(event, "#pjax-container");
    //     });
    // } else


    {
        $('.filter').submit(function () {
            var $this = $(this),

                data = $this.serialize(),
                content_table = $('.table_2'),
                btn = $('.btn');
            console.log(id_click);
            if (id_click == 'btn btn-outline-danger error_1') {
                $.ajax({
                    url: '/c/test',
                    type: 'POST',
                    data: data,
                    cache: false,
                    async: true,
                    success: function () {
                        $('.table_2').html('');
                        $('.table_2').load('/c/test .table_2');
                    },
                    error: function () {
                        alert('Error!');
                    }
                });
                return false;
            }

            if (id_click == 'btn btn-outline-danger error_2') {
                $.ajax({
                    url: '/c/ajax',
                    type: 'POST',
                    data: data,
                    cache: false,
                    async: true,
                    // beforeSend: function(){
                    //     btn.attr('disabled', true);
                    //     content_table.fadeOut(100);
                    // },
                    success: function (data) {
                        // elem = $('#elem').wrap('<div class="table_2" />').parent().html()
                        $new = $('.table_2').wrap('<div class="wrapper" />').parent().html();
                        $('.wrapper').remove();
                        $('.table').append(data);
                        // $('.test').html($new);
                        // $('.table_2').html('');
                        // $('.table_2').html(data);
                        //     content_table.delay(100).fadeIn(100, function(){
                        //         btn.attr('disabled', false);
                        // });
                    },
                    error: function () {
                        alert('Error!');
                    }
                });
                return false;
            }
            if (id_click == 'btn btn-outline-danger error_3') {

                $.ajax({
                    url: '/c/test',
                    type: 'POST',
                    data: data,
                    cache: false,
                    async: true,
                    success: function () {
                        $('.table_2').html('');

                        // objCard += '<a class="close_order " data-sum="'+orderCount*orderPrice+'"></a></div>	';
                        //  data = JSON.parse(data);

                        $('.table_2').html('<h1 style="font-size: 24px; color: green;">' + 'Запрос с данными из формы: "' + data + '" пришёл на сервер' + '</h1>');
                    },
                    error: function () {
                        alert('Error!');
                    }
                });
                return false;
            }

        });
    }

});