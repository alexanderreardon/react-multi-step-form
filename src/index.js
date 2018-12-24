import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserForm from './components/UserForm/UserForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UserForm/>, document.getElementById('root'));


serviceWorker.unregister();