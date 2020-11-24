

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        result: action.payload
      }
    default:
      return state
  }
}