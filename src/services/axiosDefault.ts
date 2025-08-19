import axios from "axios";
import * as https from "https";
import { apiUrl } from "../../config.js";

const axiosAgendei = axios.create({

  baseURL: `${apiUrl}`,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  withCredentials: true,

});

axiosAgendei.interceptors.response.use(undefined, (error) => {
  if (error) {
   return error.response;
    
  }
});

export default axiosAgendei;
