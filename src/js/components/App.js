import React, {Component} from 'react'
// import {Provider, create} from 'mini-store'

import Dashboard from './Dashboard/Dashboard'

export default class App extends Component {

	render() {
		const {data} = this.props

		return <div className="Application">
			<Dashboard data={data}/>
		</div>
	}
}
