import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App'
import {Provider} from 'react-redux';
import {persistStore, getStoredState, autoRehydrate, createPersistor} from 'redux-persist';

const store = createStore(rootReducer, autoRehydrate());
const persistor = persistStore(store, {}, (err, state) => {
});


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
