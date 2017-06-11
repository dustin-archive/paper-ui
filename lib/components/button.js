export default (obj, children) => {
  let classlist

  if (obj.class) {
    classlist = 'button ' + obj.class
  } else {
    classlist = 'button'
  }

  return {
    tag: 'a',
    data: {
      class: classlist,
      href: obj.href,
      onclick: obj.onclick,
      onkeydown (e) {
        if (e.keyCode === 13) obj.onclick()
      },
      tabindex: '0'
    },
    children: [
      { tag: 'span', data: { class: 'button-icon' }, children: obj.icon },
      { tag: 'span', data: { class: 'button-label' }, children }
    ]
  }
}
