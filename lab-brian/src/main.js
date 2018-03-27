'use strict';

import './style/reset.scss';
import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';

ReactDom.render(<App />, document.getElementById('root'));