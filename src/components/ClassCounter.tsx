import React, {ReactElement} from 'react'

interface Props {
  readonly startValue?: number;
}

interface State {
  counter: number;
}

export default class ClassCounter extends React.Component<Props, State> {
  private intervalId!: number

  constructor(props: Props) {
    super(props)
    this.state = {counter: this.props.startValue || 0}
  }

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState(currentState => ({counter: currentState.counter + 1}))
    }, 1000)
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId)
  }

  render(): ReactElement {
    return (
      <>
        <p>Counter Value: {this.state.counter}</p>
      </>
    )
  }
}
