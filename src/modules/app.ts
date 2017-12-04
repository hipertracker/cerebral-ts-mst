import { set } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'
import { types } from 'mobx-state-tree'

export default {
  model: {
    message: types.string,
  },
  state: {
    message: 'Hi ',
  },
  signals: {
    messageChanged: set(state`app.message`, props`value`),
  },
}
