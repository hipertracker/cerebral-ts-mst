import { Controller } from '@cerebral/mobx-state-tree'

import app from './modules/app'

// see: https://cerebraljs.com/docs/introduction/debugger.html
const Devtools = (
  process.env.NODE_ENV === 'development'
    ? require('cerebral/devtools').default
    : null
)

export default Controller({
  devtools: Devtools && Devtools({
    host: 'localhost:8585',
    reconnect: false,
  }),
  modules: { app },
})
