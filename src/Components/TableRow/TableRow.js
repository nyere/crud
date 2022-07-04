import React from 'react';
import UpdateButton from '../UpdateButton/UpdateButton';
import DeleteButton from '../DeleteButton/DeleteButton';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false,
            newProduct: { name: '', price: 0, currency: 'USD' },
        };
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleUpdateClick(status) {
        const isUpdating = !status;
        this.setState({ isUpdating: isUpdating });
    }

    handleChange(event) {
        const id = event.target.id;
        let value = event.target.value;
        const newProduct = this.state.newProduct;
        if (id === 'price') {
            value = Number(value);
        }
        newProduct[id] = value;
        this.setState({ newProduct: newProduct });
    }

    render() {
        const noAvailableActions =
            !this.props.permissions.update && !this.props.permissions.delete;

        return (
            <tr className="TableRow">
                {!this.state.isUpdating ? (
                    <>
                        <td>{this.props.product.name}</td>
                        <td>{this.props.product.price}</td>
                        <td>{this.props.product.currency}</td>
                        <td>
                            {noAvailableActions && (
                                <span>no available actions</span>
                            )}
                            {this.props.permissions.update && (
                                <UpdateButton
                                    product={this.props.product}
                                    // onUpdate={this.props.onUpdate}
                                    isUpdating={this.state.isUpdating}
                                    handleUpdateClick={this.handleUpdateClick}
                                    newProduct={this.state.newProduct}
                                />
                            )}
                            {this.props.permissions.delete && (
                                <DeleteButton
                                    product={this.props.product}
                                    onDelete={this.props.onDelete}
                                />
                            )}
                        </td>
                    </>
                ) : (
                    <>
                        <td>
                            <input
                                id="name"
                                placeholder={this.props.product.name}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            <input
                                id="price"
                                placeholder={this.props.product.price}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            <select
                                id="currency"
                                name="currency"
                                onChange={this.handleChange}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </td>
                        <td>
                            {noAvailableActions && (
                                <span>no available actions</span>
                            )}
                            {this.props.permissions.update && (
                                <UpdateButton
                                    product={this.props.product}
                                    newProduct={this.state.newProduct}
                                    onUpdate={this.props.onUpdate}
                                    isUpdating={this.state.isUpdating}
                                    handleUpdateClick={this.handleUpdateClick}
                                />
                            )}
                            {this.props.permissions.delete && (
                                <DeleteButton
                                    product={this.props.product}
                                    onDelete={this.props.onDelete}
                                />
                            )}
                        </td>
                    </>
                )}
            </tr>
        );
    }
}

export default TableRow;
