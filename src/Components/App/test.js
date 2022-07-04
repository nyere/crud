const object = {
    products: [
        {
            name: 'TV',
            price: 1000,
            currency: 'USD',
        },
        {
            name: 'SSD',
            price: 100,
            currency: 'USD',
        },
    ],
};

const product = {
    name: 'TV',
    price: 100,
    currency: 'USD',
};

console.log(object.products[1]);

const index = object.products.findIndex((object) => {
    return object.name === product.name;
});

console.log(index);
