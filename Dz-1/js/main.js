const products = [
	{id: 1, title: 'Notebook', price: 2000, img:'http://dummyimage.com/100'},
	{id: 2, title: 'Mouse', price: 20, img:'http://dummyimage.com/100'},
	{id: 3, title: 'Keyboard', price: 200, img:'http://dummyimage.com/100'},
	{id: 4, title: 'Gamepad', price: 50, img:'http://dummyimage.com/100'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProductItem = (x) => {
	return `<div class="product-item">
							<img src=${x.img}>
							<h3>${x.title}</h3>
							<p>${x.price}</p>
							<button class="product-btn">Купить</button>
					</div>`
};

const renderProductList = (list) => {
	let productsList = list.map(item => renderProductItem(item));
	document.querySelector('.products').innerHTML = productsList.join("");
}

renderProductList(products);


class ProductItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}
	render() {
		return `<div
	class="product-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
	}
}

class ProductList {
	constructor() {
		this.products = [];
	}
	fetchProducts() {
		this.products = [
			{id: 1, title: 'Notebook', price: 2000, img:'http://dummyimage.com/100'},
			{id: 2, title: 'Mouse', price: 20, img:'http://dummyimage.com/100'},
			{id: 3, title: 'Keyboard', price: 200, img:'http://dummyimage.com/100'},
			{id: 4, title: 'Gamepad', price: 50, img:'http://dummyimage.com/100'},
		];
	}
	render() {
		let listHtml = '';
		this.products.forEach(product => {
			const productitem = new ProductItem(product.title, product.price);
			listHtml += productitem.render();
		});
		document.querySelector('.products').innerHTML = listHtml;
	}
	
	productSum() {
		let sum = 0;
		this.products.forEach(item=>{
			sum += item.price;
		})
		
		alert (sum)
	}

}

const list = new ProductList();
	list.fetchProducts();
	list.productSum()
	//list.render(); У меня с этим не не отображается кнопка и фото. Подскажите почему так?
	
	


class Basket {

products() {}

renderProductBasket() {}

deleteProductsBasket() {}

sumPrice() {}

}

class ElemBasket {

	render () {}
}