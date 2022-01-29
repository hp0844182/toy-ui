import { Backdrop } from '../src'

export default {
  title: 'Backdrop',
  component: Backdrop,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const base = () => {
  return <Backdrop />
}
