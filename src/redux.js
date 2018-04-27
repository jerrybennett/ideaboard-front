// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const ADD_IDEA = "ADD_IDEA"

// reducer with initial state
const initialState = {
  fetching: false,
  dog: [],
  error: null,
  input: '',
  ideas: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: [...state.dog, action.dog] };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    case ADD_IDEA:
      console.log(state)
      return { ...state, ideas: [...state.ideas, action.payload]}
    // case DELETE_IDEA:
    //   return { ...state, ideas: [...state.ideas, action.payload]}
    default:
      return state;
  }
}
