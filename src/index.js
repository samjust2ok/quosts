import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './GlobalStyle';

ReactDOM.render([<Root key = {1} />,<GlobalStyle key = {2}/>], document.getElementById('root'));

serviceWorker.unregister();
