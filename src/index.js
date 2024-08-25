import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products'
import { createMarkupAll } from './services/markupService'

const allProductsEl = document.querySelector('#allProducts');

const renderAllProducts = async () => {
	try {
		const products = await getAllProducts();
		
		const productsMarkup = createMarkupAll(products);
		
		allProductsEl.innerHTML = productsMarkup;


	} catch (error) {
		console.log(error);
		
	}
}

renderAllProducts();