import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import Reducer from './reducers/reducer';
import './index.css';
import App from './components/App';

const store = createStore(Reducer, { 
    location: '',
    areLocationsLoading: false,
    locationSuggestions: [],
    timeFrame: '',
    trends: [],
    activePage: 1,
    isDisplayingResults: false,
    areTrendsLoading: false
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
