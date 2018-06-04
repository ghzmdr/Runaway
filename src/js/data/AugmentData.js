import Aggregates from './transforms/Aggregates'
import BurnRates from './transforms/BurnRates'
import Runaways from './transforms/Runaways'

const AugmentData = (data) => {

	data.costs.aggregates = Aggregates(data.costs)
	data.incomes.aggregates = Aggregates(data.incomes)

	data.burnRates = {
		in: BurnRates(data.incomes.aggregates),
		out: BurnRates(
			data.costs.aggregates,
			data.costs.aggregates.filter(a => (a.kind !== 'monthly' && a.kind !== 'yearly'))
		)
	}

	data.runaways = Runaways(data.burnRates.out, data.balance)

	return data
}

export default AugmentData
