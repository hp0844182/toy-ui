import { useState } from 'react'
import { Modal } from '../src'

export default {
  title: 'modal',
  component: Modal,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Base = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(!show)}>toggle</button>
      <Modal header="Modal header" isOpen={show} onClose={() => setShow(false)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
      </Modal>
    </>
  )
}
