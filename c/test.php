<?php  

                      // ЗАДАНИЕ НОМЕР 1
//подключаемся к базе данных и предаем составляющие тело запроса в параметре, которое будет проверяться на ошибку с помощью этой же функции
$query = select_table('name, price_retail,  price, stock_1, stock_2, country, note','pricelist ');
//создаем массив 
$my_articles = $query->fetchAll();

 //средняя оптовая цена
$query = select_avg(' price ',' pricelist' );
$medium_price = $query->fetchColumn();
$medium_price= round($medium_price,2);

//средняя розничная цена
$query = select_avg(' price_retail ',' pricelist' );
$medium_price_retail = $query->fetchColumn();
$medium_price_retail= round($medium_price_retail,2);

//общее количество товара на складе 1
$query = select_sum(' stock_1 ',' pricelist' );
$sum_stok1 = $query->fetchColumn();

//общее количество товара на складе 2
$query = select_sum(' stock_2 ',' pricelist' );
$sum_stok2 = $query->fetchColumn();

//самый дешевый оптовый товар
$query = select_min('price',' pricelist');
$min_price = $query->fetchColumn();

// самый дорогой  розничный товар 
$query = select_max('price_retail',' pricelist');
$max_price_retail = $query->fetchColumn();




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

if(count($_POST) > 0){
	$price_select = trim($_POST['price_select']);
	// echo $price_select;

	$price_min = trim($_POST['price_min']);

// echo $price_min;
	$price_max = trim($_POST['price_max']);
// echo $price_max;
	$sum_select = trim($_POST['sum_select']);	

	if($sum_select == 'count_min'){
		$sum_select = '<';
	}
	else{
		$sum_select = '>';
	}
// echo $sum_select;
	$limit = trim($_POST['limit']);
	// echo $limit;

	//проверка корректности данных , вводимых в инпуты
		if(!correct_input($price_min))
	{		
		$msg = errors();
	}	
			elseif(!correct_input($price_max))
	{		
		$msg = errors();
	}
				elseif(!correct_input($limit))
	{		
		$msg = errors();
	}
else{
	$query = select_table('name, price_retail,  price, stock_1, stock_2, country, note','pricelist ' , ' WHERE ' . $price_select . ' BETWEEN ' . $price_min . ' AND ' . $price_max . ' AND (stock_1+stock_2) ' . $sum_select . $limit);



	$my_articles = $query->fetchAll();
}



}
//выбираем вьюшку для выводсоздаем $template  для дальнейшей подстановки при выводе нужного представления через include

//include_once('v/v_post.php');
			$inner = template( 'v_test', [
				'my_articles' => $my_articles,
				'medium_price' => $medium_price,
				'medium_price_retail' => $medium_price_retail,
				'sum_stok1' => $sum_stok1,
				'sum_stok2' => $sum_stok2,
				'min_price' => $min_price,
				'max_price_retail' => $max_price_retail,
				'msg' => $msg
				
					]);
	$title = 'Прайс-лист';
	
?>

