import { createSelector } from 'reselect'
import Runaways from '../data/transforms/Runaways'

const getBalance = ({balance}) => balance
const getCosts = ({costs}) => costs

export const getRunaways = createSelector(
	[getBalance, getCosts],
	(balance, costs) => Runaways(costs.burnRates, balance)
)
