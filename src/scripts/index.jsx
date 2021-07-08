import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from '../components/App.jsx'
import store from "../ducks";

const mainApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(mainApp, document.getElementById('root'));