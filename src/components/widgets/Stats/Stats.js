import React, {Component} from 'react'

import * as styles from './Stats.scss'

const Stats = ({matrix, title}) => <div className={styles.stats}>
	<h3 className={styles.title}>{title}</h3>
	<table className={styles.table} border="0">
	<tbody>
	{
		matrix.map((item, index) => {
			if (!item.value && !item.secondaryValue) return null;

			return <tr className={styles.row} key={index}>
				<td className={styles.label}>
					{item.label}
				</td>

				<td className={styles.value}>
					{ item.value }
				</td>

				{
					item.secondaryValue ? <td className={styles.secondaryValue}>
						{item.secondaryValue}
					</td> : null
				}
			</tr>
		})
	}
	</tbody>
	</table>
</div>

export default Stats;
