import { inject, observer } from 'mobx-react'
import * as React from 'react'

@inject('store', 'signals')
@observer
export default class App extends React.Component<any, any> {
  private changed = (e: any) => {
    const { signals } = this.props
    const value = e.target.value
    signals.app.messageChanged({ value })
  }

  render () {
    const { store: { app: { message } } } = this.props
    return (
      <div>
        <h2>{message}</h2>
        <input type="text" value={message} onChange={this.changed}/>
      </div>
    )
  }
}
