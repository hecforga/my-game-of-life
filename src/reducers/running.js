const initialState = false;

const running = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return true;
    case 'RESET_GAME':
      return false;
    default:
      return state;
  }
};

export default running;

export const isGameRunning = (state) =>
  state;