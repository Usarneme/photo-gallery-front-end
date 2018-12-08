<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhotoBlog from './PhotoBlog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhotoBlog />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 24e1fcf45d50d39785955d573154a8a2ba9c5300
