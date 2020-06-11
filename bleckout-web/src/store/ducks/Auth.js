export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT'
};

const INTIAL_STATE = {
  logged_id: false,
  user: {}
};

const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user: action.user, logged_id: true};
    case Types.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export const login = (state,action) => {
  console.log('action',action)
  return ({
    type: Types.LOGIN,
    ...state,
    user: action.user,
    logged_id: true,
  })
};

export const logout = (state) => ({
  type: Types.LOGOUT,
  ...state,
  user: {},
  logged_id: false
});

export default reducer;