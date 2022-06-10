const initialState = null
const searchReducer = (state = initialState, action) => {
    if (action.type === "FETCH_SCHEME_DETAILS") {
        return action.payload
    } else {
        return state
    }
}
export default searchReducer;