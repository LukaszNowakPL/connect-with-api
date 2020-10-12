import Axios from 'axios';
import {dogsApi} from '../../helpers/constants';

const axios = Axios.create({baseURL: dogsApi});

export const getDogsList = () => {
    return axios.get(dogsApi);
};
