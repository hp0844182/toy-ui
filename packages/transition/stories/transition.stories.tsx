import React from 'react'
import { Transition } from 'react-transition-group'
export default {
  title: 'transition',
  component: Transition,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
)

export const FadeIn = ({ in: inProp }) => {
  const [s, sets] = React.useState(false)
  return (
    <div
      onClick={() => {
        sets(!s)
      }}
    >
      <Fade in={s} />
    </div>
  )
}
