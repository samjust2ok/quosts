import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {lightTheme,darkTheme} from '../constants/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components'
import store, { persistedStore } from '../store';
import StyledContainer from '../styled/StyledContainer';
import App from '../App';
import { LIGHT } from "../constants/labels";


const Root = ()=>{
    const themeSelector = store.getState().appState;
    const light = themeSelector === LIGHT;
    
    return (
        <Provider store = {store}>
            <PersistGate persistor = {persistedStore}>
                <ThemeProvider theme = {light ? lightTheme:darkTheme}>
                    <StyledContainer>
                        <Router>
                            <App/>
                        </Router>
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}


export default Root;