import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import InitialState from "./store";

const UserProvider = ({children}) => {
    const store = createStore(reducers,InitialState);
    return <Provider store={store} >{children}</Provider>
    
}


export default UserProvider;