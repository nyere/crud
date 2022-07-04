import React from 'react';
import './App.css';
import Table from '../Table/Table';
import CreateProduct from '../CreateProduct/CreateProduct';
import Utils from '../../utils';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            permissions: {},
        };
        this.deleteProduct = this.deleteProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.getPermissions = this.getPermissions.bind(this);
    }

    // calls getProducts() from ../../utils in order to obtain list of products via API calls
    getProducts() {
        Utils.getProducts().then((data) => {
            this.setState({ products: data });
        });
    }

    // calls getPermissions() from ../../utils in order to obtain list of permissions via API calls
    getPermissions() {
        Utils.getPermissions().then((data) => {
            this.setState({ permissions: data });
        });
    }

    createProduct(newProduct) {
        let products = this.state.products;
        products.push(newProduct);
        this.setState({ products: products });
    }

    deleteProduct(product) {
        let products = this.state.products;
        products = products.filter(
            (savedProduct) => savedProduct.name !== product.name
        );
        this.setState({ products: products });
    }

    updateProduct(currentProduct, newProduct) {
        let products = this.state.products;
        const indexOfCurrentProduct = products.findIndex((object) => {
            return object.name === currentProduct.name;
        });

        products[indexOfCurrentProduct] = newProduct;
        this.setState({ products: products });
    }

    render() {
        return (
            <div className="App">
                {!this.state.permissions.read ? (
                    <div className="no_read">no read permissions</div>
                ) : (
                    <Table
                        products={this.state.products}
                        permissions={this.state.permissions}
                        onDelete={this.deleteProduct}
                        onUpdate={this.updateProduct}
                    />
                )}
                {/* <br /> */}
                {this.state.permissions.create && (
                    <CreateProduct onCreate={this.createProduct} />
                )}
            </div>
        );
    }

    componentDidMount() {
        this.getProducts();
        this.getPermissions();
    }
}

export default App;
