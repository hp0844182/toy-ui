import { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { Transition } from '../src'

export default {
  title: 'transition',
  component: Transition,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Fade = () => {
  const [items, setItems] = useState([1, 2, 3, 4])
  const [show, setShow] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        aaa
      </button>
      <TransitionGroup component="div">
        {items.map((item) => {
          return (
            <Transition
              key={item + ''}
              show={show}
              appear={true}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                onClick={() => {
                  setItems((items) => items.filter((test) => test !== item))
                }}
                className="  w-56 mt-2 rounded-md shadow-lg"
              >
                <div className="p-4 bg-white rounded-md shadow-xs">Hi</div>
              </div>
            </Transition>
          )
        })}
      </TransitionGroup>
    </>
  )
}
