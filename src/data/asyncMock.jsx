export const products = [
    {
        id: 1,
        brand: 'NIKE',
        name: 'Nike SB Dunk Low',
        colorway: 'Photon Dust/Blanco/Vintage Verde',
        price: 90990,
        stock: 10,
        img: '/product_01.jpg',
        category: 'Zapatilla',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 2,
        brand: 'ADIDAS',
        name: 'CAMPUS 00S',
        colorway: 'Verde',
        price: 94990,
        stock: 100,
        img: '/product_02.jpg',
        category: 'Zapatilla',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 3,
        brand: 'NEW BALANCE',
        name: 'NEW BALANCE MR530SG',
        colorway: 'Blanco',
        price: 134990,
        stock: 100,
        img: '/product_03.jpg',
        category: 'Zapatilla',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 4,
        brand: 'LACOSTE',
        name: 'LACOSTE L003 NEO',
        colorway: 'Beige',
        price: 109990,
        stock: 100,
        img: '/product_04.jpg',
        category: 'Zapatilla',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    }
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};