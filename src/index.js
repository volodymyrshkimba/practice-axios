import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, getProductById } from './requests/products';
import {
  createMarkupAll,
  createMarkupSingleProduct,
} from './services/markupService';

const allProductsEl = document.querySelector('#allProducts');

const renderAllProducts = async () => {
  try {
    const products = await getAllProducts();

    const productsMarkup = createMarkupAll(products);

    allProductsEl.innerHTML = productsMarkup;
  } catch (error) {
    console.log(error);
  }
};

// renderAllProducts();

const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
singleProductForm.addEventListener('submit', async event => {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value.trim();
  try {
    const product = await getProductById(id);
    const productsMarkup = createMarkupSingleProduct(product);

    singleProduct.innerHTML = productsMarkup;
  } catch (error) {
    console.log(error);
  }
});
