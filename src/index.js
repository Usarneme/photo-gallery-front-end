import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhotoBlog from './PhotoBlog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhotoBlog />, document.getElementById('root'));
registerServiceWorker();
