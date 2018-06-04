import React, {Component} from 'react'

import * as styles from './Dashboard.css'

import Gauges from '../panels/Gauges/Gauges'
import Insights from '../panels/Insights/Insights'

import BottomBar from '../BottomBar/BottomBar'

class Dashboard extends Component {
	render() {
		const {costs} = this.props;


		return <div className={styles.dashboard}>
			<div className={styles.panel}>
				<Gauges />
			</div>

			<div className={styles.panel}>
				<Insights/>
			</div>

			<BottomBar/>
		</div>
	}
}


export default Dashboard
