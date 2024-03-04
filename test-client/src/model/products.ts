import products from '@/data/products.json';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export function getProducts(): Product[] {
    return products.items; 
}

// typescript knows that the products.items 
// is an array of Product objects, which is why it 
// gave an error