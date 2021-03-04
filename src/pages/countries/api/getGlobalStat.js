import axios from "axios";

export const getGlobalStatAxios = () => {
  return axios("https://covid19.mathdro.id/api")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
