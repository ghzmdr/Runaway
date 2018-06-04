const balance = (state = 0, action) => {
	switch (action.type) {
		case 'UPDATE_BALANCE':
			return action.value
		default:
			return state;
	}
}

export default balance;

