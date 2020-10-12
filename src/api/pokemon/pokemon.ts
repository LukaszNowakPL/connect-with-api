import Axios from 'axios';
import {pokemonApi, pokemonApiList} from '../../helpers/constants';

const axios = Axios.create({baseURL: pokemonApi});

export const getPokemonList = () => {
    return axios.get(pokemonApiList);
};

export const getPokemonDetails = (url: string) => {
    return Axios.get(`${url}`);
};
