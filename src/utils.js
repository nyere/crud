const Utils = {
    async getProducts() {
        const response = await fetch(
            'https://62c021bfd40d6ec55ccb69eb.mockapi.io/api/v1/products'
        );
        return await response.json();
    },

    async getPermissions() {
        const response = await fetch('/permissions.json');
        return await response.json();
    },
};

export default Utils;
