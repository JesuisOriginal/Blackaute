export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case Types.updateUser:
            return updateUser(state, action);
        case Types.updateRequests: 
            return updateRequests(state, action);
        case Types.updateSingleRequest:
            return updateSingleRequest(state, action);
        case Types.addRequest:
            return addRequest(state, action);
        case Types.updateBarrels:
            return updateBarrels(state, action);
        case Types.updateSingleBarrel:
            return updateSingleBarrel(state, action);
        case Types.addBarrel:
            return addBarrel(state, action);
        case Types.updateLoading:
            return updateLoading(state, action);
        default: 
            return state;
    }
};
