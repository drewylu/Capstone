import axios from 'axios'

const SET_STEP = 'SET_STEP'

export const setStep = step => ({
  type: SET_STEP,
  step
})

const initialState = {
  text: '',
  noteLabels: false,
  highlightedNotes: [],
  index: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP:
      return action.step
    default:
      return state
  }
}
