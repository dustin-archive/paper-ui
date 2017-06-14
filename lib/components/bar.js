export default (state, children) => {
  let classlist

  console.log(state.media)

  if (state.media >= 4) {
    classlist = 'bar -media'
  } else {
    classlist = 'bar'
  }

  return {
    tag: 'div',
    data: {
      class: classlist
    },
    children
  }
}
