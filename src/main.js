import { h, app } from 'hyperapp'

import bar from '../lib/components/bar'
// import button from '../lib/components/button'
//
// const href = 'http://google.com/'
// const icon = 'menu'
// const onclick = () => { console.log('click') }

const media = () => ({
  state: {
    media: null
  },
  actions: {
    media (state, actions, obj) {
      if (obj.matches) {
        state.media = obj.i + 1
      } else {
        state.media = obj.i
      }
      return state
    }
  },
  events: {
    loaded (state, actions) {
      for (let i = 12; i--;) {
        const query = i * 100 + 101
        const media = window.matchMedia(`(min-width:${query}px)`)
        media.onchange = () => {
          actions.media({ i, matches: media.matches })
        }
      }
    }
  }
})

app({
  plugins: [media],
  state: {},
  actions: {},
  view: (state, actions) => ({
    tag: 'div',
    children: [
      bar(state, [
        { tag: 'h1', data: null, children: JSON.stringify(state) }
        // button(state, actions, { icon, onclick }, 'no href'),
        // button(state, actions, { href, icon, onclick }),
        // button(state, actions, { href, onclick }, 'no icon')
      ])
    ]
  })
})
