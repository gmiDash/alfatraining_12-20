import {useCallback, useState} from "react"

export default function useCounter(startValue = 0): {counter: number, incrementCounter: () => void} {
  const [counter, setCounter] = useState<number>(startValue)

  const incrementCounter = useCallback((): void => {
    setCounter(counter_ => counter_ + 1)
  }, [])

  return {counter, incrementCounter}
}
