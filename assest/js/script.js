window.onload = function() {
    console.log('onload'); 

// собираем данные с формы  
    var inp_price_min = document.querySelector('input[name=price_min]');
    var inp_price_max = document.querySelector('input[name=price_max]');
    var inp_limit = document.querySelector('input[name=limit]');
    
    console.log(inp_price_min.value);
    console.log(inp_price_max.value);
    console.log(inp_limit.value);
    

function validateForm_price_min() {
    // var x = document.forms[".form"][".name"].value;
    var x = document.querySelector(inp_price_min).value;
    console.log('validateForm_price_min');
    if(x.match(/^[0-9]*[.,]?[0-9]+$/))
    {      
        document.querySelector('.errors_name').innerHTML = "";
        return false;
    }
    if (x == "") {        
        document.querySelector('.errors_name').innerHTML =
         "<span class='errors'>Необходимо ввести значение 'ОТ'!</span>";     
            return false;
    }
    else{
             document.querySelector('.errors_name').innerHTML =
         "<span class='errors'>Только числовое значение 'ОТ'!</span>";     
            return false;
    }
}

document.querySelector(inp_price_min).onclick = function(){
  validateForm_price_min();
}
document.querySelector(inp_price_min).onchange = function(){
  validateForm_price_min();
}

function validateForm_phone() {
    // var x = document.forms[".form"][".name"].value;
    var x = document.querySelector('input[name=phone]').value;
    console.log('validateForm_phone');


    // if(document.querySelector('input[name=phone]').value.match([0-9]{10,20})) {

    //  document.querySelector('.errors_phone').innerHTML = "";
    //  return false;

   // }
       if (x == "") {
      console.log("Необходимо ввести имя");
      document.querySelector('.errors_phone').innerHTML =
      "<span class='errors'>Необходимо ввести 'Телефон'. От 11 до 20 цифр!!</span>";       

      return false;
    }

   if (x.match(/^(\d{11,20})$/)) {
    console.log("OK телефон!");
    document.querySelector('.errors_phone').innerHTML = "";
    return false;
  }
  if (!x.match(/^(\d{11,20})$/)) {
    console.log("OK телефон!");
    document.querySelector('.errors_phone').innerHTML = "От 11 до 20 цифр!";
    return false;
  }
}

document.querySelector('input[name=phone]').onclick = function(){
  validateForm_phone();
}
document.querySelector('input[name=phone]').onchange = function(){
  validateForm_phone();
}

document.querySelector('.btn').onclick = function(){
    console.log('onclick');
    // собираем данные с формы 
        var params = 'price_min='+inp_price_min.value; 
    // var params = 'name='+inp_name.value+'&'+'phone='+inp_phone.value+'&'+'email='+inp_email.value+'&'+'city='+inp_city.value;
    
  // ajaxPost(params);
    console.log(params);
    // console.log(3);
    
            
 };


}

// $(function () {
//     $(".btn").click(function () {
//         id_click = $(this).attr("class");
//         console.log("класс куда кликнули = " + id_click);
//     });
//     // if (id_click == 'btn btn-outline-danger') {
//     //     // $(document).pjax('.btn-outline-dark', '#pjax-container', {
//     //     //     fragment: '#pjax-container'
//     //     // });
//     //     //   $(document).on("submit", "#form", function (event) {
//     //     // event.preventDefault();
//     //     // $.pjax.submit(event, "#pjax-container");
//     //     //   });
//     //     $(document.body).on("submit", "#form", function (event) {
//     //         return false; // stop default submit behavior when it bubbles to <body>
//     //         $.pjax.submit(event, "#pjax-container");
//     //     });
//     // } else


//     {
//         $('.filter').submit(function () {
//             var $this = $(this),

//                 data = $this.serialize(),
//                 content_table = $('.table_2'),
//                 btn = $('.btn');
//             console.log(id_click);
//             if (id_click == 'btn btn-outline-danger error_1') {
//                 $.ajax({
//                     url: '/c/test',
//                     type: 'POST',
//                     data: data,
//                     cache: false,
//                     async: true,
//                     success: function () {
//                         $('.table_2').html('');
//                         $('.table_2').load('/c/test .table_2');
//                     },
//                     error: function () {
//                         alert('Error!');
//                     }
//                 });
//                 return false;
//             }

//             if (id_click == 'btn btn-outline-danger error_2') {
//                 $.ajax({
//                     url: '/c/ajax',
//                     type: 'POST',
//                     data: data,
//                     cache: false,
//                     async: true,
//                     // beforeSend: function(){
//                     //     btn.attr('disabled', true);
//                     //     content_table.fadeOut(100);
//                     // },
//                     success: function (data) {
//                         // elem = $('#elem').wrap('<div class="table_2" />').parent().html()
//                         $new = $('.table_2').wrap('<div class="wrapper" />').parent().html();
//                         $('.wrapper').remove();
//                         $('.table').append(data);
//                         // $('.test').html($new);
//                         // $('.table_2').html('');
//                         // $('.table_2').html(data);
//                         //     content_table.delay(100).fadeIn(100, function(){
//                         //         btn.attr('disabled', false);
//                         // });
//                     },
//                     error: function () {
//                         alert('Error!');
//                     }
//                 });
//                 return false;
//             }
//             if (id_click == 'btn btn-outline-danger error_3') {

//                 $.ajax({
//                     url: '/c/test',
//                     type: 'POST',
//                     data: data,
//                     cache: false,
//                     async: true,
//                     success: function () {
//                         $('.table_2').html('');

//                         // objCard += '<a class="close_order " data-sum="'+orderCount*orderPrice+'"></a></div>	';
//                         //  data = JSON.parse(data);

//                         $('.table_2').html('<h1 style="font-size: 24px; color: green;">' + 'Запрос с данными из формы: "' + data + '" пришёл на сервер' + '</h1>');
//                     },
//                     error: function () {
//                         alert('Error!');
//                     }
//                 });
//                 return false;
//             }

//         });
//     }

// });