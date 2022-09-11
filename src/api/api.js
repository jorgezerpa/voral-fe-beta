const categories = [
    { name: 'one', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg' },
    { name: 'two', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg' },
    { name: 'three', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg' },
    { name: 'four', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg' },
    { name: 'five', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg' },
]

const products = [
    { id: 1, category: 'one', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 2, category: 'one', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 3, category: 'two', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 4, category: 'two', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 5, category: 'three', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 6, category: 'three', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 7, category: 'four', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 8, category: 'five', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 9, category: 'five', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    { id: 10, category: 'five', name: 'product', description: 'small description', img: 'https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg', price: 10, quantity: 1, size: 'L' },
    
]

export async function getCategories(){
    return await categories
}

export async function getProducts(){
    return await products
}

