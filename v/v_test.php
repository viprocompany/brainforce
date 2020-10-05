<!-- TABLE -->
<div class="table">
	<div class="msg"><?php echo $msg; ?></div>
	<div class="test"></div>
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

</div>
<div class="container info border-info border  rounded " id="content">
	<div class="prices">
		<span>Средняя оптовая цена</span>
		<label type="text" name="med_price" class="inp" value=""><?= $medium_price; ?></label>
		<span>рублей. Средняя розничная цена</span>
		<label type="text" name="max" class="inp" value=""><?= $medium_price_retail; ?></label>
		<span>рублей.</span>
	</div>
	<div class="stocks">
		<span>Общее количество на складе №1</span>
		<label type="text" name="stock1" class="inp" value=""><?= $sum_stok1; ?></label>
		<span>штук. Общее количество на складе №2</span>
		<label type="text" name="stock2" class="inp" value=""><?= $sum_stok2; ?></label>
		<span>рублей.</span>
	</div>
	<!-- <div class="peacs">
		<span>Минимальная оптовая цена</span>
		<label type="text" name="min" class="inp" value=""><?= $min_price; ?></label>
		<span>рублей. Максимальная розничная цена</span>
		<label type="text" name="max" class="inp" value=""><?= $max_price_retail; ?></label>
			<span>рублей.</span>
</div> -->
</div>