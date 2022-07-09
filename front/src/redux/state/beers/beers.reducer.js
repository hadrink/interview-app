import { BeerActionTypes } from './beers.model';

const defaultBeersState = {
  items: [],
  loading: false,
};
export const beersReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers };
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };
    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, items: [...state.items, action.beer] };
    case BeerActionTypes.BEERS_UPDATE_BEER:
      //Find and replace beer updated
      const { items } = state;
      const itemIndex = items.findIndex(
        (item) => item.uuid == action.beer.uuid
      );
      items[itemIndex] = action.beer;
      return { ...state, items: [...items] };
    default:
      return state;
  }
};
