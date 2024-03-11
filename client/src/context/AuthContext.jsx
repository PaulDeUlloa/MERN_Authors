import { createContext, useReducer } from "react";

export const AuthContext = createContext({
  state: null,
  dispatch: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      //if user logs out then we just return null.
      return { user: null };
    default:
      console.log("unexpected action type:", action.type);
      return state;
  }
}

//useReducer(authReducer, { user: null }); <-- that is the initial state.
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
