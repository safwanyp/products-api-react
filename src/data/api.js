import Product from "./product_class";

const BASE_URL = 'https://dummyjson.com/products';

export async function getAllProducts(numberOfProducts) {
    const response = await fetch(`${BASE_URL}?limit=${numberOfProducts}`);
    const data = await response.json();

    const products = data.products.map((product) => new Product(
        product.id,
        product.title,
        product.description,
        product.price,
        product.discountPercentage,
        product.rating,
        product.stock,
        product.brand,
        product.category,
        product.thumbnail,
        product.images
    ));

    console.log('Products: ', products);
    return products;
}