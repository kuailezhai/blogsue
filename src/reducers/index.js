import { combineReducers } from 'redux' // 利用combineReducers 合并reducers

const initialState = { count: 0 }

function plus(state = initialState, action) {
  switch (action.type) {
    case 'PLUS':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

export default combineReducers({
  plus,
  sample: (store = {}) => store
})
