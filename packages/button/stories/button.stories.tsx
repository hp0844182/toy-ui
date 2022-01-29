import { Button } from '../src'
import { Announcement } from './announcement'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const colors = () => (
  <div className="flex space-x-2">
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="danger">danger</Button>
    <Button color="warn">warn</Button>
    <Button color="link">link</Button>
  </div>
)

export const lightColors = () => (
  <div className="flex space-x-2">
    <Button color="primary" variant="light">
      primary
    </Button>
    <Button color="secondary" variant="light">
      secondary
    </Button>
    <Button color="success" variant="light">
      success
    </Button>
    <Button color="danger" variant="light">
      danger
    </Button>
    <Button color="warn" variant="light">
      warn
    </Button>
    <Button color="link" variant="light">
      warn
    </Button>
  </div>
)

export const outline = () => (
  <div className="flex space-x-2 items-center">
    <Button color="primary" variant="outline">
      primary
    </Button>
    <Button color="secondary" variant="outline">
      secondary
    </Button>
    <Button color="success" variant="outline">
      success
    </Button>
    <Button color="danger" variant="outline">
      danger
    </Button>
    <Button color="warn" variant="outline">
      warn
    </Button>
    <Button color="link" variant="outline">
      warn
    </Button>
  </div>
)

export const size = () => (
  <div className="flex space-x-2 items-center">
    <Button size="xs" color="primary">
      Button
    </Button>
    <Button size="sm" color="primary">
      Button
    </Button>
    <Button size="md" color="primary">
      Button
    </Button>
    <Button size="lg" color="primary">
      Button
    </Button>
    <Button size="xl" color="primary">
      Button
    </Button>
  </div>
)

export const disabled = () => {
  return (
    <div className="flex space-x-2 items-center">
      <Button color="primary" disabled>
        primary
      </Button>
      <Button color="danger" disabled>
        danger
      </Button>
      <Button color="link" disabled>
        link
      </Button>
      <Button color="secondary" disabled>
        secondary
      </Button>
      <Button color="success" disabled>
        success
      </Button>
      <Button color="warn" disabled>
        warn
      </Button>
    </div>
  )
}

export const loading = () => {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <Button color="primary" loading>
          primary
        </Button>
        <Button color="danger" loading>
          danger
        </Button>
        <Button color="link" loading>
          link
        </Button>
        <Button color="secondary" loading>
          secondary
        </Button>
        <Button color="success" loading>
          success
        </Button>
        <Button color="warn" loading>
          warn
        </Button>
      </div>
      <div className="flex space-x-2 items-center mt-4">
        <Button color="primary" loading size="xs">
          xssize
        </Button>
        <Button color="link" loading size="sm">
          link
        </Button>
        <Button color="secondary" loading size="md">
          secondary
        </Button>
        <Button color="success" loading size="lg">
          success
        </Button>
        <Button color="danger" loading size="xl">
          danger
        </Button>
      </div>
    </div>
  )
}

export const icon = () => {
  return (
    <div className="flex space-x-2 items-center">
      <Button color="primary" leftIcon={<Announcement />}>
        primary
      </Button>
      <Button color="danger" rightIcon={<Announcement />}>
        danger
      </Button>
    </div>
  )
}
