import { forwardRef, RefAttributes, PropsWithoutRef, ForwardRefRenderFunction, ForwardRefExoticComponent } from 'react'

/**
 * 传递ref到element
 * 添加displayName
 */
export function forwardRefWithName<T, P = unknown>(
  component: ForwardRefRenderFunction<T, P>,
  displayName: string,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  component.displayName = displayName
  return forwardRef(component)
}
