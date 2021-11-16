const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        payload: action.payload,
      };
    case 'DELETE_DATA':
      const deleteData = state?.payload.filter(
        data => data.id !== action.payload.id,
      );
      return {
        ...state,
        payload: deleteData,
      };
    default:
      return state;
  }
};

export default getDataReducer;
