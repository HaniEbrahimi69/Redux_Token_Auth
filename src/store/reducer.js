export default actions => (state, { type, payload }) => {
  if (actions[type])
    return {
      ...state,
      ...actions[type](state, payload)
    };
  return state;
};
