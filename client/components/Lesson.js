//need to update lesson & steps models
//need to seed file

//need to decide on how to move to an exercise at the end of a steps array, & then how to move to next lesson

import React from 'react'
import ReactDOM from 'react-dom'
import {useDispatch, useSelector} from 'react-redux'
import LessonOneContainer from './LessonOneContainer'
import NoteLabels from './NoteLabels'
import DimensionsProvider from './DimensionsProvider'
import SoundfontProvider from './SoundfontProvider'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'

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

const dispatch = useDispatch()
const {lesson, step} = useSelector(state => {
  return {
    lesson: state.lesson,
    step: state.step
  }
})

export default function Lesson(props) {
  return (
    <>
      {/* <NoteContainer /> */}
      <LessonOneContainer />
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
                highlightedNotes={step.highlightedNotes}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
      {step.noteLabels ? <NoteLabels /> : null}
    </>
  )
}
