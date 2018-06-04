import round from '../utils/round'

const BurnRates = (Aggregates, excludes) => {
	const total = 	Aggregates.reduce((acc, entry) => acc += entry.secondaryValue, 0)
	const totalExclusive = excludes
		? excludes.reduce((acc, entry) => acc += entry.secondaryValue, 0)
		: null

	return [{
		label: 'Daily',
		kind: 'daily',
		value: round(total / 365),
		secondaryValue: round(totalExclusive / 365)
	}, {
		label: 'Weekly',
		kind: 'weekly',
		value: round(total / 51),
		secondaryValue: round(totalExclusive / 51)
	}, {
		label: 'Monthly',
		kind: 'monthly',
		value: round(total / 12),
		secondaryValue: round(totalExclusive / 12)
	}, {
		label: 'Yearly',
		kind: 'yearly',
		value: total,
		secondaryValue: totalExclusive
	}]
}

export default BurnRates
