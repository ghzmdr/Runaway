import React, {Component} from 'react'

import * as styles from './Dashboard.css'

import Gauge from '../Gauge/Gauge'
import Insights from '../Insights/Insights'
import BottomBar from '../BottomBar/BottomBar'

export default class Dashboard extends Component {
	render() {
		const {data} = this.props;
		const burnRate = data.burnRates.out.filter(e => e.kind === 'daily')[0].value
		const runaway = data.runaways.filter(e => e.kind === 'daily')[0].value

		return <div className={styles.dashboard}>
			<div className={`${styles.panel} ${styles.panelNarrow}`}>

				<Gauge value={burnRate} target="40"
					title="Burn Rate" subtitle="€ / day"
					mode="inverse"/>

				<Gauge value={runaway} target="60"
					title="Runaway" subtitle="days"/>

			</div>

			<div className={styles.panel}>
				<Insights data={data} />
			</div>

			<BottomBar data={data} />
		</div>
	}
}
