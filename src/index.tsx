import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import controller from './controller'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider {...controller.provide()}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()
