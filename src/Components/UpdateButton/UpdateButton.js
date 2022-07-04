import React from 'react';

class UpdateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
    }

    handleUpdateClick() {
        this.props.handleUpdateClick(this.props.isUpdating);
    }

    handleUpdateProduct() {
        if (!this.props.newProduct.name && !this.props.newProduct.price) {
            this.handleUpdateClick();
            return;
        }
        if (!this.props.newProduct.name || !this.props.newProduct.price) {
            alert('Fill out the entire form');
            return;
        }
        this.props.onUpdate(this.props.product, this.props.newProduct);
        this.handleUpdateClick();
    }

    render() {
        return (
            <div className="Update">
                {!this.props.isUpdating ? (
                    <button onClick={this.handleUpdateClick}>Update</button>
                ) : (
                    <button onClick={this.handleUpdateProduct}>Save</button>
                )}
            </div>
        );
    }
}

export default UpdateButton;
