const BASE_URL = 'https://dummyjson.com/products';

export async function getAllProducts() {
    const response = await fetch(`${BASE_URL}?limit=100`);
    const data = await response.json();

    console.log('data: ', data);
    return data;
}