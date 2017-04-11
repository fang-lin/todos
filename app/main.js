import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App'
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';

const store = createStore(rootReducer, autoRehydrate());
persistStore(store);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
