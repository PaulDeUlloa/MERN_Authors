import { createContext, useEffect, useReducer } from "react";

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

  // JSON.parse = Converts a JavaScript Object Notation (JSON) string into an object.
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, [state.user?.id]);
  // The ? i s an optional operator which is saying if there is an Id that's okay and if there's NOT an Id thats okay too.

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
