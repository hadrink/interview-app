import axios from 'axios';

export const getBeers = () => axios.get(`/beers`);
export const postBeer = (beer) => axios.post(`/beers`, beer);
export const rateBeer = ({ id, score }) =>
  axios.post(`/beers/${id}/rate`, { score });
