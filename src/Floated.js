import React, {Component} from 'react';

class Floated extends Component {
    render() {
        const direction = this.props.right !== undefined ? 'right' : 'left';

        return (
            <div style={{float: direction}}>
                {this.props.children}
            </div>
        );
    }
}

export default Floated;
