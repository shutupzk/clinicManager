const PROMPT_SHOW_CHANGE = 'PROMPT_SHOW_CHANGE'

const initState = {
  show: false
}

export function prompt(state = initState, action = {}) {
  switch (action.type) {
    case PROMPT_SHOW_CHANGE:
      return { ...state, show: action.show }
    default:
      return state
  }
}

export const showPrompt = ({ show }) => dispatch => {
  dispatch({
    type: PROMPT_SHOW_CHANGE,
    show
  })
}
