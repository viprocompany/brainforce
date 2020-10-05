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

  document.querySelector('.test').onclick = function () {

    // let input_price_select = document.querySelector('.price_select');
    // let price_select = {
    //   "price_select": input_price_select.value
    // };
    // let input_price_min = document.querySelector('.price_min');
    // let price_min = {
    //   "price_min": input_price_min.value
    // };
    // let input_price_max = document.querySelector('.price_max');
    // let price_max = {
    //   "price_max": input_price_max.value
    // };
    // let input_sum_select = document.querySelector('.sum_select');
    // let sum_select = {
    //   "sum_select": input_sum_select.value
    // };
    // let input_limit = document.querySelector('.limit');
    // let limit = {
    //   "limit": input_limit.value
    // };

    let data = {
      "price_select": document.querySelector('.price_select').value,
      "price_min": document.querySelector('.price_min').value,
      "price_max": document.querySelector('.price_max').value,
      "sum_select": document.querySelector('.sum_select').value,
      "limit": document.querySelector('.limit').value
    }

    console.log(data);
    ajax('c/test', 'POST', showTime, data);
  }



  function showTime(data) {
    // data = JSON.parse(data);
    // console.log(data);
    alert(data);
  }












}