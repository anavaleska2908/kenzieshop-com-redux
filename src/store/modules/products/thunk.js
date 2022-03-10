import { filterPops, filterAll } from './actions';

export const filterPopsThunk = (data) => {
  return (dispatch, getState) => {
    const { products } = getState();
    const filteredProducts = products.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(data.toLowerCase()) ||
        category.toLowerCase().includes(data.toLowerCase())
      );
    });
    dispatch(filterPops(filteredProducts));
  };
};

export const filterAllThunks = () => {
  return (dispatch, getState) => {
    const { products } = getState();
    dispatch(filterAll(''));
  };
};
