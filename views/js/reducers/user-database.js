const initialState = {
	user: [],
	token: ''
}

const userDatabase = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_USER_PROFILE':
			return {
				...state,
				user: action.user
			}

		case 'RECEIVE_CANCEL_EVENT':
			return {
				...state,
				user: action.user
			}			

		case 'RECEIVE_CANCEL_RSVP':
			return {
				...state,
				user: action.user
			}

		case 'RECEIVE_TOKEN':
			return {
				...state,
				token: action.token
			}

		default:
			return state;
	}
}

export default userDatabase;