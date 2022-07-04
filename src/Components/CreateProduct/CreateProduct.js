import React from 'react';
import './CreateProduct.css';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', price: 0, currency: 'USD' };
        this.createProduct = this.createProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createProduct() {
        if (!this.state.name || !this.state.price) {
            alert('Fill out the entire form');
            return;
        }
        const newProduct = this.state;
        this.props.onCreate(newProduct);
    }

    handleChange(event) {
        const id = event.target.id;
        let value = event.target.value;
        if (id === 'price') {
            value = Number(value);
        }
        this.setState({ [id]: value });
    }

    render() {
        return (
            <div className="CreateProduct">
                <h1>Create New Product</h1>
                <input
                    className="input"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                <input
                    className="input"
                    id="price"
                    placeholder="Price"
                    onChange={this.handleChange}
                />
                <select
                    className="input"
                    id="currency"
                    name="currency"
                    onChange={this.handleChange}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <button onClick={this.createProduct}>Create Product</button>
            </div>
        );
    }
}

export default CreateProduct;
