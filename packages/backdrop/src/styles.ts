import { createMemoClass } from '@hpui/theme'
import { cx } from '@hpui/utils'
import { BackdropProps } from './backdrop'

export const useBackdropClasses = createMemoClass((props: BackdropProps) => {
  return cx('backdrop', props.className)
})
