import { useRef } from 'react'

export const useId = () => {
  const { current } = useRef<string>(Math.random().toString(16).slice(2))
  return current
}
