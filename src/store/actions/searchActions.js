import callApi from "../../components/Api/callApi";
export const fetchSearchResults = (searchData) => {
  return async (dispatch, getState) => {
    let searchConfig = {
      method: "get",
      url: `https://api.mfapi.in/mf/search?q=${searchData}`,
    };
    let apiResponse = await callApi(searchConfig);
    try {
      apiResponse = apiResponse.data;
    } catch (error) {
      apiResponse = []
    }
    dispatch({ type: "FETCH_SEARCH_DATA", payload: apiResponse });
  };
};
