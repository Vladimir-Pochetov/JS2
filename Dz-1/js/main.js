const products = [
	{id: 1, title: 'Notebook', price: 2000, img:'./img/notebook.jpg'},
	{id: 2, title: 'Mouse', price: 20, img:'./img/mouse.jpg'},
	{id: 3, title: 'Keyboard', price: 200, img:'./img/keyboard.jpg'},
	{id: 4, title: 'Gamepad', price: 50, img:'./img/gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (x) => {
	return `<div class="product-item">
							<img src=${x.img}>
							<h3>${x.title}</h3>
							<p>${x.price}</p>
							<button class="product-btn">Купить</button>
					</div>`
};
const renderPage = list => {
	const productsList = list.map(item => renderProduct(item));
	console.log(productsList);
	document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);