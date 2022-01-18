import { Spinner } from '../src'

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const basic = () => (
  <div className="flex space-x-2">
    <Spinner spinning>
      <div>自定义文案</div>
    </Spinner>
    <Spinner className="text-primary-500" />
  </div>
)

export const size = () => (
  <div className="flex space-x-2">
    <Spinner size="xs" spinning />
    <Spinner size="sm" spinning />
    <Spinner size="md" spinning />
    <Spinner size="lg" spinning />
    <Spinner size="xl" spinning className="text-primary" />
  </div>
)
