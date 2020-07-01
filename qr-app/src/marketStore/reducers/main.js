const INITIAL_STATE = {
    orders:[],
    // sentStatus: false
};

// export default function(state = false, action) {
//     if (action.type === 'SET_SENT_STATUS') {
//         return action.sentStatus;
//     } else {
//         return state;
//     }
// }

// a funcao do reducer ja adiciona um state novo ao historico
// a funcao select ja pega automatico o ultimo state

// TODO: fazer uma action type = 'sent' que limpa orders pra uma lista vazia, ou volta pro estado inicial
export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_ORDER':
            return addOrder(state, action );
        default: 
            return state;
    }
};

export const addOrder = (state, { orders }) => ({
    ...state,
    orders: [
      ...state.orders,
      order
    ]
});