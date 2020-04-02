import axios from 'axios'

// action-types
const SET_SINGLE_SONG = 'SET_SINGLE_SONG'

// action-creators
const setSingleSong = song => {
  return {
    type: SET_SINGLE_SONG,
    song
  }
}

// thunk-creators
export const fetchSingleSong = songId => {
  console.log('song id', songId)
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/songs/${songId}`)
      console.log(data)
      dispatch(setSingleSong(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducers
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_SONG:
      return action.song
    default:
      return state
  }
}
