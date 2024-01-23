class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || stock == null) {
            throw new Error('Todos los campos del producto son obligatorios');
        }


        if (this.products.some(product => product.code === code)) {
            throw new Error('El código del producto ya existe');
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error('NotFound');
            return null;
        }
    }
}

export default ProductManager;


