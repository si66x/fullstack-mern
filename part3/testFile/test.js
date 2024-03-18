const axios = require("axios");
const baseURL = "https://lime-uninterested-snapper.cyclic.app/api/notes";

axios.get(baseURL).then((response) => {
  console.log(response);
});
