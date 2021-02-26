import axios from "axios";

const axiosConfig = {
  baseURL: "https://picode-mlpr.herokuapp.com",
};

export default axios.create(axiosConfig);
