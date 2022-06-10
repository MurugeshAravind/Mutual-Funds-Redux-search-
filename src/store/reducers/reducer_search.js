const initialState = []
const searchReducer = (state = initialState, action) => {
    if (action.type === "FETCH_SEARCH_DATA") {
        return action.payload
    } else {
        return state
    }
}
export default searchReducer;