import Aggregates from '../data/transforms/Aggregates'
import BurnRates from '../data/transforms/BurnRates'

const costs = (state = {entries: []}, action) => {
	switch (action.type) {
		case 'ADD_COST':
			return computeCosts([
				...state.entries,
				{
					id: action.id,
					label: action.label,
					value: action.value,
					kind: action.kind
				}
			])

		case 'REMOVE_COST':
			return computeCosts([
				...state.filter(e => e.id !== action.id)
			])

		default:
			return computeCosts(state.entries);
	}
}

const computeCosts = (entries) => {
	const aggregates = Aggregates(entries)
	const burnRates = BurnRates(
		aggregates,
		aggregates.filter(a => (a.kind !== 'monthly' && a.kind !== 'yearly'))
	)

	return {
		entries,
		aggregates,
		burnRates
	}

}

export default costs;

