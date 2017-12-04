import { types } from 'mobx-state-tree'
import { set } from 'cerebral/operators'
import { state, props } from 'cerebral/tags'

export default {
  model: {
    message: types.string
  },
  state: {
    message: 'Hi '
  },
  signals: {
    messageChanged: set(state`app.message`, props`value`)
  }
}
