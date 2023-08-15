import { useRef } from 'react'

export default function useDebounce(
  fn: (...args: string[]) => void,
  delay: number,
) {
  const timeoutRef = useRef(0)

  function debouncedFn(...args: string[]) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
  return debouncedFn
}
