import { Component } from "react";
import { connect } from "react-redux";


class H1Text extends Component {

    render() {
        
        const count = this.props.count;
    
        return (
            <h1  style={{display: 'inline'}}>{count}</h1>
        );
    }
}

export default H1Text;