import {fetchUtils} from 'react-admin';

const apiUrl = 'http://localhost:4000';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json.users,
            total: 10
        }));
    }
};