// import localforage from 'localforage'
// import gql from 'graphql-tag'

const PROMPT_SHOW = 'PROMPT_SHOW'
const PROMPT_HIDE = 'PROMPT_HIDE'

const initState = {
  data: {}
}

// reducer
export function prompt (state = initState, action = {}) {
  switch (action.type) {
    case PROMPT_SHOW:
      return Object.assign({}, state, { data: { text: action.text, timer: action.timer || 1000 } })
    case PROMPT_HIDE:
      return Object.assign({}, state, { data: { text: '', timer: null } })
    default:
      return state
  }
}

export const showPrompt = ({ text, timer }) => dispatch => {
  dispatch({
    type: PROMPT_SHOW,
    text,
    timer
  })
}
export const hidePrompt = () => dispatch => {
  dispatch({
    type: PROMPT_HIDE
  })
}
