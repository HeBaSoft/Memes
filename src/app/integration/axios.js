import axios from 'axios';
import qs from 'query-string';

axios.defaults.baseURL = 'http://api.filipsi.net/';
axios.defaults.paramsSerializer = (params) => {
	return qs.stringify(params, { arrayFormat: 'comma' });
};
