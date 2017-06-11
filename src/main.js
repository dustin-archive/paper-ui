import { app } from '../node_modules/dist/hyperapp'

function view (state, actions) {
  return {
    tag: 'div',
    children: 'hello'
  }
}

app({
  state: {},
  view: (state, actions) => view(state, actions),
  actions: {}
})
