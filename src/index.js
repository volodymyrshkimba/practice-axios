import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, getProductById, createNewProduct } from './requests/products';
import {
  createMarkupAll,
  createMarkupSingleProduct, createMarkupProduct
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


const productForm = document.querySelector(`.product-form`);
const newProductSection = document.querySelector(`#newProductSection`);

const addNewproduct = async event => {
  event.preventDefault();
  const title = event.target.elements.title.value.trim();
  const description = event.target.elements.description.value.trim();
  const price = event.target.elements.price.value.trim();
  if (title === '' || description === '' || price === '') {
    alert(`Заповніть всі поля!`);
    return
  }
  const newProduct = { title, description, price };
  const response = await createNewProduct(newProduct);
  console.log(response);
  if (response.status === 201) {
    newProductSection.innerHTML = createMarkupProduct(newProduct);
  }
  else {
    alert(`${response.statusText}`)

  }



}

productForm.addEventListener(`submit`, addNewproduct)
