import {combineReducers} from 'redux'

import balance from './balance'
import costs from './costs'
import incomes from './incomes'
import targets from './targets'

const root = combineReducers({
	balance,
	costs,
	incomes,
	targets
})

export default root
