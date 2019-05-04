const createModeReducer = (state = false, { type }) => {
  switch (type) {
    case 'CREATE_START':
      return true;
    case 'CREATE_FINISH':
      return false;
    default:
      return state;
  }
};
export default createModeReducer;
