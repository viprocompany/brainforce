<?php  
//объявляем константу для переменной корня сайта для подстановки на ссылках сайта после перехода на человекочитаемые урлы
define('ROOT','/');
// define('ROOT','http://brainforce/');
// var_dump([$_SERVER]);
include_once('m/validate.php');
include_once('m/db.php');
include_once('m/system.php');

$title = '';
$inner = '';

	include_once("c/test.php");
	// include_once("c/ajax.php.php");

	//массив для добавления в темплейт
	$array = [
	'title'=> $title,
	'content'=> $inner
];
  
	//выводим итоговый шаблон v_main из переменных-шаблонов для разметки title, content,
echo template('v_main', $array);
