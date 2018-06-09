import { createSelector } from 'reselect'
import Runaways from '../data/transforms/Runaways'

const getBalance = ({balance}) => balance
const getCostsBurnRates = ({costs}) => costs.burnRates

export const getRunaways = createSelector(
	[getBalance, getCostsBurnRates],
	(balance, burnRates) => Runaways(burnRates, balance)
)


// export const getCostsAggregates = createSelector(
// 	[getCostsEntries],
// 	(entries) => Aggregates(entries)
// )

// export const getCostsBurnRates = createSelector(
// 	[getCostsEntries, getCostsAggregates],
// 	(entries) => Aggregates(entries)
// )

// export const getIncomesAggregates = createSelector(
// 	[getIncomeEntries],
// 	(entries) => Aggregates(entries)
// )

// export const getIncomesBurnRates = () => ({})
