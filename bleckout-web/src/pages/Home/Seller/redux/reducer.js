const INITIAL_STATE = {
    products: [],
    clients: [],
    chats: [],
};

const reducer = (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_PRODUCTS':
            return {...state, products: action.products};
        case 'UPDATE_CLIENTS':
            return {...state, products: action.clients};
        case 'UPDATE_CHATS':
            return {...state, products: action.chats};
        default:
            break;
    }
}