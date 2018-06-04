import React, {Component} from 'react'

import * as styles from './Insights.css'
import Stats from '../Stats/Stats'

const Insights = ({data}) => <div className={styles.insights}>

	<Stats matrix={data.costs.aggregates} title="Expenses"/>
	<Stats matrix={data.burnRates.out} title="Burn Rates"/>
	<Stats matrix={data.runaways} title="Runaways"/>

</div>

export default Insights;
