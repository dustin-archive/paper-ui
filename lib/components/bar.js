export default (media, children) => {
  let matches
  let classlist

  window.matchMedia(media).onchange = () => {
    matches = window.matchMedia(media).matches
  }

  if (matches) {
    classlist = 'bar -media'
  } else {
    classlist = 'bar'
  }

  return {
    tag: 'div',
    data: { class: classlist },
    children
  }
}
