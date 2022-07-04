import React from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';

class Table extends React.Component {
    render() {
        return (
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Currency</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product, key) => {
                            return (
                                <TableRow
                                    key={key}
                                    product={product}
                                    permissions={this.props.permissions}
                                    onDelete={this.props.onDelete}
                                    onUpdate={this.props.onUpdate}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
