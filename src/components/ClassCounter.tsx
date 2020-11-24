import React, {ReactElement} from 'react'

interface Props {
  readonly startValue?: number;
}

interface State {
  counter: number;
}

export default class ClassCounter extends React.Component<Props, State> {
  private intervalId!: number
  private defaultTitle: string

  constructor(props: Props) {
    super(props)
    this.state = {counter: this.props.startValue || 0}
    this.defaultTitle = window.document.title
  }

  private incrementCounter = (): void => {
    // this.setState({counter: this.state.counter + 1})
    this.setState(currentState => ({counter: currentState.counter + 1}))
  }

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.incrementCounter, 2000)
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId)
    window.document.title = this.defaultTitle
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.counter !== this.state.counter) {
      window.document.title = `Counter: ${this.state.counter}`
    }
  }

  render(): ReactElement {
    return (
      <p>
        Counter Value: {this.state.counter}
        <button className="ui button icon" onClick={this.incrementCounter}>
          <i className="icon plus" />
        </button>
      </p>
    )
  }
}
