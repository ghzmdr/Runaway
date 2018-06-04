export const loadState = _ => {
	try {
		return JSON.parse(localStorage.getItem('state'))
	} catch(e) {
		return {}
	}
}


export const saveState = (state) => {
	try {
		localStorage.setItem('state', JSON.stringify(state))
	} catch (e) {}
}
