import Aggregates from '../data/transforms/Aggregates'
import BurnRates from '../data/transforms/BurnRates'

const incomes = (state = {entries: []}, action) => {
	switch (action.type) {
		case 'ADD_INCOME':
			return computeIncomes([
				...state.entries,
				{
					id: action.id,
					label: action.label,
					value: action.value,
					kind: action.kind
				}
			])

		case 'REMOVE_INCOME':
			return computeIncomes([
				...state.filter(e => e.id !== action.id)
			])

		default:
			return computeIncomes(state.entries);
	}
}

const computeIncomes = (entries) => {
	const aggregates = Aggregates(entries)
	const burnRates = BurnRates(aggregates)

	return {
		entries,
		aggregates,
		burnRates
	}
}

export default incomes

