import React from 'react';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        this.props.onDelete(this.props.product);
    }

    render() {
        return (
            <button className="Delete" onClick={this.deleteProduct}>
                Delete
            </button>
        );
    }
}

export default DeleteButton;
