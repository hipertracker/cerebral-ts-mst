import { Controller } from '@cerebral/mobx-state-tree'

import app from './modules/app'

const Devtools = (
  process.env.NODE_ENV === 'production' ? null : require('cerebral/devtools').default
)

export default Controller({
  devtools: Devtools && Devtools({
    host: 'localhost:8585',
    reconnect: false
  }),
  modules: { app }
})
