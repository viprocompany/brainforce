"use strict";
window.onload = function (e) {

  console.log('ajax.js');
  // XMLHttpRequest
  function ajax(url, method, functionName, dataArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(dataArray));

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        functionName(this.response);
      }
    }
  }

  function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
      out += `${key}=${dataArr[key]}&`;
    }
    console.log(out);
    return out;
  }

function validateForm_price_min() {
    // var x = document.forms[".form"][".name"].value;
    let x = document.querySelector('input[name=price_min]').value;
    console.log('validateForm_price_min');
    if(x.match(/^[0-9]*[.,]?[0-9]+$/))
    {      
       document.querySelector('.price_min').style.border= 'none';
        document.querySelector('.errors_name').innerHTML = "";
        return false;
    }
    if (x == "") {   
     document.querySelector('.price_min').style.border= '4px solid yellow';     
        document.querySelector('.errors_name').innerHTML =
           "<span style='color: red; text-align: center;'>Необходимо ввести значение 'ОТ'!</span>";     
            return false;
    }
    else{
    document.querySelector('.price_min').style.border= '4px solid yellow';
             document.querySelector('.errors_name').innerHTML =
         "<span style='color: red; text-align: center;'>Только числовое значение 'ОТ'!</span>";     
            return false;
    }
}

  document.querySelector('.test').onclick = function () {
    event.preventDefault();
    let data = {
      "price_select": document.querySelector('.price_select').value,
      "price_min": document.querySelector('.price_min').value,
      "price_max": document.querySelector('.price_max').value,
      "sum_select": document.querySelector('.sum_select').value,
      "limit": document.querySelector('.limit').value
    }
    console.log(data);
    document.querySelector('input[name=price_min]').onclick = function(){
      validateForm_price_min();
    }
    document.querySelector('input[name=price_min]').onchange = function(){
      validateForm_price_min();
    }

    ajax('c/test', 'POST', showTime, data);
  }

  function showTime(data) {

    document.querySelector('.wrapper').innerHTML = "";

    let div = document.createElement('div');
    div.className = "table_2";
    div.innerHTML = data;

    document.querySelector('.wrapper').append(div);
    //ОБРЕЗКА ЛИШНИХ ЭЛЕМЕНТОВ ОТ СТРАНИЦЫ , КОТРУЮ ОТПРАВИЛ СЕРВЕР В СВОЁМ ОТВЕТЕ. РАБОТАЕТ ОТЛИЧНО.
    document.querySelector('.ajax .ajax .container').remove();
    document.querySelector('.ajax .ajax .content_table .container').remove();
    document.querySelector(' html body .ajax .content_table .table').style.overflow = 'hidden';
    document.querySelector(' html body .ajax .content_table .table').style.padding = '0';
    document.querySelector(' html body .ajax .content_table .table .ajax .content_table .table').style.margin = '0';
    document.querySelector(' html body .ajax .content_table .table .ajax .content_table .table').style.border = 'none';
  }












}