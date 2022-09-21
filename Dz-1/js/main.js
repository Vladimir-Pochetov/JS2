const products = [
	{id: 1, title: 'Notebook', price: 2000, img:'http://dummyimage.com/100'},
	{id: 2, title: 'Mouse', price: 20, img:'http://dummyimage.com/100'},
	{id: 3, title: 'Keyboard', price: 200, img:'http://dummyimage.com/100'},
	{id: 4, title: 'Gamepad', price: 50, img:'http://dummyimage.com/100'},
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