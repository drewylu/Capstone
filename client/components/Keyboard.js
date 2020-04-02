// in react piano piano:
// write handle key down: call callback with active notes

// on keyboard:
// callback that sets state, pass to piano as props

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {
  NoteContainer,
  DimensionsProvider,
  SoundfontProvider
} from '../components'
import {Dropdown} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net'

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4')
}
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW
})

export default function Keyboard(props) {
  const [toggleOn, toggle] = useState(true)
  const handleKeyboardLabel = () => {
    toggle(!toggleOn)
  }
  return (
    <Fade bottom>
      {/* <NoteContainer /> */}
      <button type="button" onClick={handleKeyboardLabel}>
        {toggleOn ? 'Hide Keyboard Labels' : 'Show Keyboard Labels'}
      </button>
      {/* <input type="checkbox" {toggleOn ? "checked" : null} data-toggle="toggle"/> */}
      <DimensionsProvider>
        {({containerWidth, containerHeight}) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({isLoading, playNote, stopNote}) => (
              <Piano
                noteRange={noteRange}
                width={containerWidth}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={toggleOn ? keyboardShortcuts : []}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
    </Fade>
  )
}
