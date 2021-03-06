import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NoteLabels, Keyboard, LessonOneContainer} from '../components'
import {fetchSingleLesson} from '../store'

export default function Lesson(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleLesson(props.match.params.id))
  }, [])

  const {lesson, user, step} = useSelector(state => {
    return {lesson: state.lesson, user: state.user, step: state.step}
  })

  return (
    <>
      <LessonOneContainer lesson={lesson} />
      <Keyboard highlightedNotes={step.highlightedNotes} />
      {step.noteLabels ? <NoteLabels /> : null}
    </>
  )
}
