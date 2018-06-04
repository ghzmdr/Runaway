import React, {Component} from 'react'
import {connect} from 'react-redux'

import { getRunaways } from '../../../selectors'

import * as styles from './Insights.css'

import Stats from '../../widgets/Stats/Stats'

@connect(state => ({costs: state.costs, runaways: getRunaways(state)}))
class Insights extends Component {
	render() {
		const {costs, runaways} = this.props
		return <div className={styles.insights}>

			<Stats matrix={costs.aggregates} title="Expenses"/>
			<Stats matrix={costs.burnRates} title="Burn Rates"/>
			<Stats matrix={runaways} title="Runaways"/>

		</div>
	}
}

export default Insights;
