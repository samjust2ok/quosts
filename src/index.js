import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './GlobalStyle';
import store from './store';
import { Provider} from "react-redux";

ReactDOM.render([
<Provider store = {store}>
    <Root key = {1} />
</Provider>,<GlobalStyle key = {2}/>], document.getElementById('root'));

serviceWorker.unregister();
