import round from '../utils/round'

const sumValues = (acc, entry) => acc + entry.value

const Aggregate = ({entries}) => [{
	label: 'Daily',
	kind: 'daily',
	value: round(entries.filter(e => e.kind === 'daily').reduce(sumValues, 0)),
	secondaryValue: round(entries.filter(e => e.kind === 'daily').reduce(sumValues, 0) * 365),
}, {
	label: 'Weekly',
	kind: 'weekly',
	value: round(entries.filter(e => e.kind === 'weekly').reduce(sumValues, 0)),
	secondaryValue: round(entries.filter(e => e.kind === 'weekly').reduce(sumValues, 0) * 51),
}, {
	label:'Monthly',
	kind: 'monthly',
	value: round(entries.filter(e => e.kind === 'monthly').reduce(sumValues, 0)),
	secondaryValue: round(entries.filter(e => e.kind === 'monthly').reduce(sumValues, 0) * 12),
}, {
	label: 'Yearly',
	kind: 'yearly',
	value: round(entries.filter(e => e.kind === 'yearly').reduce(sumValues, 0)),
	secondaryValue: round(entries.filter(e => e.kind === 'yearly').reduce(sumValues, 0)),
}]

export default Aggregate
