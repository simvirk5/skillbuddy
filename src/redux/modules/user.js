export const LIFT_USER = 'skill_buddy_frontend/user/LIFT_USER';
export const LOGOUT = 'skill_buddy_frontend/user/LOGOUT';

const initialState = {
  user: null,
  token: null,
};

export function liftUser({ user, token }) {
  return { type: LIFT_USER, user, token };
};

export function logout() {
  return { type: LOGOUT }
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LIFT_USER:
      return {...state, user: action.user, token: action.token};
    case LOGOUT:
      return {...state, user: null, token: null};
    default:
      return state;
  }
};
