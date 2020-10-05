<?php



//ЗАДАНИЕ НОМЕР 2


//выбор опшина из селектора по виду типу цены
$price_select = "";
//нижний предел поиска по цене
$price_min = "";
//верхний предел поиска по цене
$price_max = "";
//выбор опшина из селектора по направлению поиска : ВВЕРХ или ВНИЗ по значениям количества на складах
$sum_select = "";
//искомое количество товара на складе
$limit = "";

$msg = "";

// менять запись isPost()
// if(count($_POST) > 0){
// var_dump(isPost());
if (isPost()) {
  $price_select = trim($_POST['price_select']);
  // echo $price_select;

  $price_min = trim($_POST['price_min']);

  // echo $price_min;
  $price_max = trim($_POST['price_max']);
  // echo $price_max;
  $sum_select = trim($_POST['sum_select']);

  if ($sum_select == 'count_min') {
    $sum_select = '<';
  } else {
    $sum_select = '>';
  }
  // echo $sum_select;
  $limit = trim($_POST['limit']);
  // echo $limit;

  //проверка корректности данных , вводимых в инпуты
  if (!correct_input($price_min)) {
    $msg = errors();
  } elseif (!correct_input($price_max)) {
    $msg = errors();
  } elseif (!correct_input($limit)) {
    $msg = errors();
  } else {
    $query = select_table('name, price_retail,  price, stock_1, stock_2, country, note', 'pricelist ', ' WHERE ' . $price_select . ' BETWEEN ' . $price_min . ' AND ' . $price_max . ' AND (stock_1+stock_2) ' . $sum_select . $limit);



    $my_articles = $query->fetchAll();
?>
    <?php ?>
    <div class="wrapper">
      <table class="table_2" id="pjax-container">
        <!--ряд с ячейками заголовков-->
        <tr>
          <th>Наименование товара</th>
          <th>Стоимость, руб</th>
          <th>Стоимость опт, руб</th>
          <th>Наличие на складе 1, шт</th>
          <th>Наличие на складе 2, шт</th>
          <th>Страна производства</th>
          <th>Примечание</th>
        </tr>
        <?php foreach ($my_articles as $message) {
        ?>
          <!--ряд с ячейками тела таблицы-->
          <?php
          if ($message['price'] == $min_price) {
          ?>
            <tr style="color: #24A424; font-weight: 900;">
            <?php
          } elseif ($message['price_retail'] == $max_price_retail) {
            ?>
            <tr style="color: red; font-weight: 900;">
            <?php
          } else {
            ?>
            <tr>
            <?php
          }
            ?>
            <td class="name"><?= $message['name'] ?></td>


            <td class="price_retail"><?= $message['price_retail'] ?></td>
            <td class="price"><?= $message['price'] ?></td>
            <td class="stock_1"><?= $message['stock_1'] ?></td>
            <td class="stock_2"><?= $message['stock_2'] ?></td>
            <td class="country"><?= $message['country'] ?></td>
            <?php
            $count = $message['stock_1'] + $message['stock_2'];
            if ($count < 20) {
            ?>
              <td class="note" style="color: blue; font-weight: 900;">Осталось мало!! Срочно докупите!!!</td>
            <?php
            }
            ?>
            <td class="note"><?= $message['note'] ?></td>
            </tr>
          <?php } ?>
      </table>
    </div>

<?php
  }
}
