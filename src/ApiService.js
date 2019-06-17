import Axios from "axios";

class ApiService {
  constructor() {
    this.apiUrl = "https://api.graphql.jobs/";
  }

  async apiCallGraphQl(resource, fields) {
    const query = `{${resource} ${fields}}`;
    const res = await Axios({
      url: this.apiUrl,
      method: "POST",
      data: { query }
    });
    return res.data;
  }
}

export default new ApiService();
