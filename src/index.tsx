import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import registerServiceWorker from './registerServiceWorker'

import controller from './controller'
import App from './components/App'

render(
  <Provider {...controller.provide() }>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()
