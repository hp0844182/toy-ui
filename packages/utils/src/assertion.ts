import { Dict } from './types'

// Array assertions
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value)
}

// Object assertions
export function isObject(value: any): value is Dict {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function') && !isArray(value)
}

export const __DEV__ = process.env.NODE_ENV !== 'production'

// has children
export const isNestedPattern = (children: any) => !!(children && typeof children !== 'undefined')
