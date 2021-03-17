import axios from 'axios';

export default {
    Employee: function () {
        return axios.get('https://randomuser.me/api/?results=50');
    }
};