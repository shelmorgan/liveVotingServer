import {List, Map} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', entries);
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
}

//THIS IS WHERE YOU WERE 
export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}
