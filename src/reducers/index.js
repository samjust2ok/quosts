  
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appTheme from "./appTheme";

const rootReducer =  combineReducers({
    appTheme,
})

const persistConfig = {
    key:'quosts',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;