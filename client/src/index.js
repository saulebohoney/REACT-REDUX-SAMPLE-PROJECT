import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import './index.css';
import store from './store';

ReactDOM.render(
<Provider store={store}>
  <CheeseList />
</Provider>,
  document.getElementById('root')
);
