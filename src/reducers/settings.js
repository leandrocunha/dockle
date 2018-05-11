const settings = (state = { interface: 'light' }, action) => {
  switch (action.type) {
    case 'SETTINGS_SAVE':
      return Object.assign({}, state, action.data);

    default:
      return state;
  }
};

export default settings;
