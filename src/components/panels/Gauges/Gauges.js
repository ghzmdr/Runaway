import React, {Component} from 'react'
import {connect} from 'react-redux'

import { getRunaways } from '../../../selectors'

import * as styles from './Gauges.scss'

import Gauge from '../../widgets/Gauge/Gauge'

@connect(state => ({costs: state.costs, runaways: getRunaways(state)}))
class Gauges extends Component {
	render() {
		const {costs, runaways} = this.props;
		const burnRate = costs.burnRates.filter(e => e.kind === 'daily')[0].value
		const runaway = runaways.filter(e => e.kind === 'daily')[0].value

		return <div className={styles.gauges}>

				<Gauge value={burnRate} target="40"
					title="Burn Rate" subtitle="€ / day"
					mode="inverse"/>

				<Gauge value={runaway} target="60"
					title="Runaway" subtitle="days"/>
		</div>
	}
}

export default Gauges
