export default (state = [], action) => {
  switch (action.type) {
    case 'SET_SPEAKER_DETAILS':
      return [
        {
          name: action.name,
          topic: action.topic,
        },
        ...state,
      ]
    default:
      return state;
  }
};
