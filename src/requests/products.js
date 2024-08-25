import apiInstance from "../services/api";

export const getAllProducts = async () => {
	try {
		const response = await apiInstance.get('/products');
		return response.data.products;
		
	} catch (error) {
		console.log(error);
		
	}
}

