import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import AugmentData from './data/AugmentData'

require('../scss/main.scss');
const data = require('./data.json');

ReactDOM.render(
	<App data={AugmentData(data)}/>,
	document.getElementById('root')
);
