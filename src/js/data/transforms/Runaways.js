import round from '../utils/round'

const Runaways = (BurnRates, balance) => [{
	label: 'Days',
	kind: 'daily',
	value: round(balance / BurnRates.filter(b => b.kind === 'daily')[0].value, 0),
	secondaryValue: round(balance / BurnRates.filter(b => b.kind === 'daily')[0].secondaryValue, 0)
}, {
	label: 'Weeks',
	kind: 'weekly',
	value: round(balance / BurnRates.filter(b => b.kind === 'weekly')[0].value, 0),
	secondaryValue: round(balance / BurnRates.filter(b => b.kind === 'weekly')[0].secondaryValue, 0)
}, {
	label: 'Months',
	kind: 'monthly',
	value: round(balance / BurnRates.filter(b => b.kind === 'monthly')[0].value, 0),
	secondaryValue: round(balance / BurnRates.filter(b => b.kind === 'monthly')[0].secondaryValue, 0)
}, {
	label: 'Years',
	kind: 'yearly',
	value: round(balance / BurnRates.filter(b => b.kind === 'yearly')[0].value, 0),
	secondaryValue: round(balance / BurnRates.filter(b => b.kind === 'yearly')[0].secondaryValue, 0)
}]

export default Runaways
