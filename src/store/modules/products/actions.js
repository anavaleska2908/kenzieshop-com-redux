import { FILTER_POPS, FILTER_ALL } from './actionTypes';

export const filterPops = (pops) => ({
  type: FILTER_POPS,
  pops,
});

export const filterAll = (pops) => ({
  type: FILTER_ALL,
  pops,
});
