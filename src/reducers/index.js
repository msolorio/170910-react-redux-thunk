import * as actions from '../actions';

const initialState = {
  lists: []
};

export const reducer = (state=initialState, action) => {

  if (action.type === actions.FETCH_BOARD_SUCCESS) {
    return action.board
  }

  // if (action.type === actions.FETCH_BOARD) {
  //   return action.board;
  // }

  return state;
}
