import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './state/configureStore';

window.store = configureStore();

ReactDOM.render(
  <Provider store={window.store}>
    <div>
      <App />
    </div>
  </Provider>, window.document.getElementById('root'));
registerServiceWorker();
