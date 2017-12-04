import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import controller from '../controller'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider {...controller.provide() }><App/></Provider>, div)
})
