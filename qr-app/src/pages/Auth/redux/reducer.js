import { useSelector } from "react-redux";

export const Types = {
    login:'auth/LOGIN',
    logout:'auth/LOGOUT',
    setUpdateLoading:'auth/UPDATE_LOADING'
};

const INITIAL_STATE = {
    userData:{},
    logged_in: false,
    loading: false
}

export default function reducer (state = INITIAL_STATE,action) {
    switch(action.type) {
        case Types.login:
            return Actions[Types.login](state, action);
        case Types.logout:
            return Actions[Types.logout](state);
        case Types.setUpdateLoading:
            return Actions[Types.setUpdateLoading](state, action);
        default: 
            return state
    };
}

//Actions
export const Actions = {
    'auth/LOGIN': (state, {userData}) => ({
        ...state,
        userData,
        logged_in: true,
    }),
    'auth/LOGOUT': state => INITIAL_STATE,
    'auth/UPDATE_LOADING': (state, {loading}) => ({...state,loading}),
};

//Selectors 
export const getUserData = state => state.AuthReducer.userData;
export const getLoggedIn = state => state.AuthReducer.logged_in;
export const getLoading = state => state.AuthReducer.loading;
