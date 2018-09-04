const Axios = require('axios');

module.exports = async (url: string, data: any) => {
    data.variables = JSON.parse(data.variables);
    // todo: add jwt token here!
    let result = await Axios.post(url, data).then((response: any) => result = response);
    return result.data.data;
};
