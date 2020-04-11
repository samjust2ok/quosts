import configureStore from './configureStore';
import axios from 'axios';


const {store,persistedStore} = configureStore();
console.log(store.getState())
export {persistedStore, store as default}