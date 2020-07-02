const INITIAL_STATE = {
    orders:[],
};


// a funcao do reducer ja adiciona um state novo ao historico
// a funcao select ja pega automatico o ultimo state

// TODO: fazer uma action type = 'sent' que limpa orders pra uma lista vazia, ou volta pro estado inicial

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'market/ADD_ORDER': {
            console.log("state", state);
            console.log("action", action);
            console.log("payload", action.payload);

            return addBarrel(state, action.payload );
        }
        case 'GET_ORDER':
            return state.orders;
        default: 
            return state;
    }
};

export const addBarrel = (state, { order }) => ({
    // ...state,
    // orders:[...state.orders, order]
    orders: [...state.orders].concat(order)
});

// export const getOrders = (state, { orders })