import React from 'react';
class Price extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <div>
            {this.props.product &&
                <span>{this.props.product.price} ریال </span>
            }

        </div>
    }
}

export default Price;
