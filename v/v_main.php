<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">  
	<link rel="stylesheet" href="<?php echo ROOT?>assest/css/style.css">
	<title><?php echo $title; ?></title>
</head>
<body> 
	<div class="container">
		
		<div class="row " >
			<div class="col-12 border border rounded" id="hello">
				<h1  style="font-weight:900;">Прайс-лист продукции.</h1>
			</div>
		</div>
		<!--БЛОК КОНТЕНТ-->
		<div class="row "  id="content">				
			<div class="col-12  border-info border  rounded" id="center" >	
				<!--кнопки-->
				<div class="row border-success d-block" id="downald">		<form class="filter" method="post">	
						<span>Показать товары, у которых </span>
						<select name="price_select" class="price_select" >
							<option  value="price_retail">Розничная цена</option>
							<option  value="price">Оптовая цена</option>
						</select>
						<span>от</span>
						<input type="text" name="price_min" class="price_min" value="1000" required>
						<span>до</span>
						<input type="text" name="price_max" class="price_max" value="3000" required>
						<span>рублей и на складе</span>
						<select name="sum_select" class="sum_select" >
							<option  value="count_min">Менее</option>
							<option  value="count_max">Более</option>
						</select>
						<input type="text" name="limit" class="limit" value="20" required>
						<span>штук</span>
						<input type="submit" value="показать товары" class="btn btn-outline-dark">
					</form>
					<p class="msg"><?php echo $msg; ?></p>
				</div>				
			</div>			
		</div>
	</div>
	<div class="content_table">
		<?php echo $content;?>
	</div>
		<!-- Optional JavaScript -->
		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="<?php echo ROOT?>assest/js/jquery-3.3.1.js"></script>
		<script src="<?php echo ROOT?>assest/js/script.js"></script>
	</body>
	</html>
