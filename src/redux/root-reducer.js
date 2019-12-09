import {combineReducers} from 'redux';
import  underwritingReducer from './Underwriting/underwriting.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['underwriting']
}

const rootReducer=combineReducers({
    underwriting:underwritingReducer
});

export default  persistReducer(persistConfig,rootReducer)