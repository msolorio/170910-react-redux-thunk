import boardData from '../board';

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = (board) => ({
  type: FETCH_BOARD_SUCCESS,
  board
});

export const FETCH_BOARD = 'FETCH_BOARD';
export function fetchBoard() {
  return function(dispatch) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(boardData);
      }, 9000)
    })
    .then((board) => {
      dispatch(fetchBoardSuccess(board));
    });
  }
}

// export const FETCH_BOARD = 'FETCH_BOARD';
// export const fetchBoard = () => {
//
//   let populatedBoardData = {
//     lists: []
//   };
//
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(boardData);
//     }, 9000)
//   })
//   .then((board) => {
//     // doesn't return from the fetchBoard method :(
//     return {
//       type: FETCH_BOARD,
//       board: board
//     }
//   });
//
//   return {
//     type: FETCH_BOARD,
//     board: populatedBoardData
//   }
// }
