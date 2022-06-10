import callApi from "../../components/Api/callApi";
export const fetchSchemeDetails = (id) => {
  return async (dispatch, getState) => {
    let schemeDetailsConfig = {
      method: "get",
      url: `https://api.mfapi.in/mf/${id}`,
    };
    let apiResponse = await callApi(schemeDetailsConfig);
    try {
      apiResponse = apiResponse.data.meta;
    } catch (error) {
      apiResponse = null
    }
    dispatch({ type: "FETCH_SCHEME_DETAILS", payload: apiResponse });
  };
};
