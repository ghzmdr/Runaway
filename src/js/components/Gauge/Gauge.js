import React, {Component} from 'react'

import * as styles from './Gauge.scss'

export default class Gauge extends Component {
	render() {
		const {title, subtitle, value, target, suffix, mode} = this.props

		const currentPercentage = mode === "inverse"
			? target / value
			: value / target

		let circleStroke = '#22ff22'

		if (currentPercentage < 0.75) circleStroke = '#ffff00'
		if (currentPercentage < 0.25) circleStroke = '#ff2222'

		return <div className={styles.gauge}>
			<h3 className={styles.title}>
				{title}
			</h3>

			<div className={styles.content}>
				<div className={styles.background}></div>
				<svg className={styles.progress} viewBox="0 0 100 100">
					<circle className={styles.progressLine}
						r="49" cx="50" cy="50"
						stroke={circleStroke}
						strokeDasharray="308"
						strokeDashoffset={Math.max(308 - currentPercentage * 308, 0)}/>
				</svg>
				<div className={styles.value}>
					<div className={styles.valueNumber}>
					{value}
					</div>
					<div className={styles.valueSubtitle}>
					{subtitle}
					</div>
				</div>
			</div>

			<div className={styles.target}>
				Target: {target} {subtitle}
			</div>
			<div className={styles.target}>
				Progress {(currentPercentage * 100).toFixed(2)}%
			</div>
		</div>
	}
}
