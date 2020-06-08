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
    case Types.LOGIN:
      return login(state,action.user);
    case Types.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export const login = (state,user) => ({
  ...state,
  user,
  logged_id: true
});

export const logout = (state) => ({
  ...state,
  user: {},
  logged_id: false
});

export default reducer;