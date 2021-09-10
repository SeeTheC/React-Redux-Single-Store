const initState = {
    count : 100
};

const rootReducer = (state = initState, action) => {
    console.log(state);
    switch(action.type) {
        case "INC":
            return {
                ...state,
                count: state.count + 1
            }
            break;
        case "DEC":
            return {
                ...state,
                count: state.count - 1
            }
            break;
    }
    return state;
}

export default rootReducer;