export const Types = {
    updateUser: 'main/UPDATE_USER',
    updateRequests: 'main/UPDATE_REQUESTS',
    updateSingleRequest: 'main/UPDATE_SINGLE_REQUEST',
    addRequest: 'main/ADD_REQUEST',
    updateBarrels: 'main/UPDATE_BARRELS',
    updateSingleBarrel: 'main/UPDATE_SINGLE_BARREL',
    addBarrel: 'main/ADD_BARREL',
    updateLoading: 'main/UPDATE_LOADING'
};

const INITIAL_STATE = {
    user:{},
    requests:[],
    barrels:[],
    loading:false
};

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

export const updateUser = (state, {user}) => ({
    ...state,
    user
});

export const updateRequests = (state, {requests}) => ({
    ...state,
    requests
});

export const updateSingleRequest = (state, {index, data}) => ({
    ...state,
    requests:[
        ...state.requests[index],
        data
    ],
});

export const addRequest = (state, {data}) => ({
    ...state,
    requests:[...state.requests, data]
});

export const updateBarrels = (state, {barrels}) => ({
    ...state,
    barrels
});

export const updateSingleBarrel = (state, {index, data}) => ({
    ...state,
    barrels:[
        ...state.barrels[index],
        data
    ]
});

export const addBarrel = (state, {barrel}) => ({
    ...state,
    barrels:[...state.barrels, barrel]
});

export const updateLoading = (state, {loading}) => ({
    ...state,
    loading
});