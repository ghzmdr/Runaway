import root from './reducers'

import {loadState, saveState} from './data/persistence'
import {createStore} from 'redux'

const configureStore = _ => {
	const persistedState = loadState()
	const store = createStore(root, persistedState)

	store.subscribe(_ => saveState(store.getState()))
	return store
}


export default configureStore

