const targets = (state = {}, action) => {

	switch (action.type) {
		case 'ADD_TARGET':
			return [
				...state,
				makeTarget(action)
			];

		case 'REMOVE_TARGET':
			return state.filter(t => t !== action.id)

		default:
			return state;
	}
}

const makeTarget = ({target, minimal, kind, to}) => {
	target, minimal, kind, to
}

export default targets;

