const initialState = 0;
const step = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
    case 'RESET_GAME':
      return initialState;
    case 'PERFORM_NEXT_STEP':
      return state + 1;
    default:
      return state;
  }
};

export default step;

export const getStep = (state) =>
  state;