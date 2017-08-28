export const dummyAction = () => ({
  type: 'SET_DUMMY_DATA',
  data: 'Hello, Redux!',
});

export const setSpeakerDetails = (name, topic) => ({
  type: 'SET_SPEAKER_DETAILS',
  name,
  topic,
});

export default undefined;
