import React, {Component} from 'react'

import * as styles from './BottomBar.scss'
import round from '../../data/utils/round'

export default class BottomBar extends Component {
	render() {
		const {balance, costs, incomes, targets, burnRates, runaways} = this.props.data;

		const monthlyIn = burnRates.in.filter(i => i.kind === 'monthly')[0].value
		const monthlyOut = burnRates.out.filter(c => c.kind === 'monthly')[0].value

		const currentRunaway = runaways.filter(r => r.kind === 'daily')[0].value
		const minimalRunaway = targets.runaway.filter(r => r.kind === 'daily')[0].minimal

		let balanceColor = '#22ff22'

		if (currentRunaway < minimalRunaway) balanceColor = 'yellow'
		if (balance < 0) balanceColor = '#ff2222'

		const monthlyDifference = round(monthlyIn - monthlyOut)

		return <div className={styles.bar}>
			<span>
				Balance: <span style={{color: balanceColor}}>{balance}€</span>
			</span>

			<span> ⬇ {monthlyIn} ⬆ {monthlyOut} • Growth:
				<span className={monthlyDifference < 0
						? styles.differenceNegative
						: styles.differencePositive
				}> {monthlyDifference} ({round(monthlyDifference / monthlyIn * 100)}%)</span>
			</span>
		</div>
	}
}
