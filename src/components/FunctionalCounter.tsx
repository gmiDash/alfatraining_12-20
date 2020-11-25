import React, {ReactElement, useState, useEffect} from 'react';

interface Props {
  startValue?: number
}

export default function FunctionalCounter(props: Props): ReactElement {
  const [counter, setCounter] = useState<number>(props.startValue || 0)

  const incrementCounter = () => {
    setCounter(counter_ => counter_ + 1)
  }

  useEffect(() => {
    const intervalId = window.setInterval(incrementCounter, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const defaultTitle = window.document.title
    window.document.title = `Counter: ${counter}`
    return () => {
      window.document.title = defaultTitle
    }
  }, [counter])

  return (
    <p>
      Counter Value: {counter}
      <button className="ui button icon" onClick={incrementCounter}>
        <i className="icon plus" />
      </button>
    </p>
  )
}
