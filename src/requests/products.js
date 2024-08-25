import apiInstance from '../services/api';

export const getAllProducts = async () => {
  try {
    const response = await apiInstance.get('/products');
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async id => {
  try {
    const response = await apiInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
