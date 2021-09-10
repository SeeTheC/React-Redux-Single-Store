import React, {Component} from  'react'
import IncrementDecrement from './IncDec'

import {createStore} from 'redux'
import {Provider}  from 'react-redux'
import rootReducer from '../reducer/rootReducer';

class IncrementDecrementWrapper extends Component {

    constructor() {
        super();
        const store = createStore(rootReducer);
        this.store = store;
    }

    render() {
        return (
            <Provider store={this.store} >
                <IncrementDecrement />
            </Provider>
        );
    }
}

export default IncrementDecrementWrapper;