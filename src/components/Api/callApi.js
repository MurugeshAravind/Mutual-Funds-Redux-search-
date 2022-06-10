import axios from "axios";

const callApi = async (config) => {
  const apiResponse =  await axios({
      method: config.method,
      url: config.url  
    })
   return apiResponse;
}

export default callApi