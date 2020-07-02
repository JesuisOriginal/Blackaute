export const orderTypes = {
    getBarril : 'order/GET_BARRIL',
    addBarril : 'order/ADD_BARRIL',
    setActiveOrder : 'order/SET_ACTIVE_ORDER', 
    setActiveBarril: 'order/SET_ACTIVE_BARRIL',
    clearState: 'order/CLEAR_STATE',
    setToggleBarril: 'order/SET_TOGGLE_BARRIL'
}

const INITIAL_STATE = {
    activeOrder: {},
    activeBarril: [],
    toggleBarril: null
}

export default function reducer( state = INITIAL_STATE, action){
    switch(action.type) {
        case orderTypes.getBarril:
            return state.aciveBarril;
        case orderTypes.addBarril:
            return {...state, activeBarril: [...state.activeBarril, action.payload]};
        case orderTypes.setActiveOrder:
            return {...state, activeOrder: action.payload };
        case orderTypes.setActiveBarril:
            return {...state, activeBarril: action.payload};
        case orderTypes.clearState:
            return {activeOrder: {}, activeOrder : [] };
        case orderTypes.setToggleBarril:
            return {...state, toggleBarril: action.payload}
        default:
            return state;
    }
}


export function getBarril() {
    return {
        type: 'order/GET_BARRIL',
        payload: {}
    }
}

export function addBarril(newBarril) {
    return {
        type: 'order/ADD_BARRIL',
        payload: newBarril
    }
}

export function setActiveOrder(activeOrder) {
    return {
        type: 'order/SET_ACTIVE_ORDER',
        payload: activeOrder
    }
}

export function setActiveBarril(activeBarril) {
    return {
        type : 'order/SET_ACTIVE_BARRIL',
        payload : activeBarril
    }
}

export function setToggleBarril(toggleBarril) {
    return {
        type: 'order/SET_TOGGLE_BARRIL',
        payload : toggleBarril
    }
}

export function clearState() {
    return {
        type: 'order/CLEAR_STATE',
        payload: {}
    }
}