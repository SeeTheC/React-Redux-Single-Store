import { Component } from "react";
import {connect} from 'react-redux'
import H1Text from "./H1Text";

class IncrementDecrement extends Component {

    Increment() {
        console.log(this.props);
        this.props.dispatch({type:'INC'});
    }

    Decrement() {
        this.props.dispatch({type:'DEC'});
    }

    render () {
        const count = this.props.count;
        return (
            <div> 
                <button onClick={()=> this.Increment()}> + Increment</button>
                {/* <h1 style={{display: 'inline'}}> {count} </h1> */}
                <H1Text {...this.props} />
                <button onClick={()=> this.Decrement()}> - Decrement</button>                
            </div>

        );


    }

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispactToProp = (dispatch, dispatch2 ) => {
    console.log("-------");
    console.log(dispatch);
    console.log(dispatch2);
    console.log("-------");
    return {
        dispatch:dispatch
    }
}
export default connect(mapStateToProps, mapDispactToProp)(IncrementDecrement);