export default (obj, slot) => {
  let children = []
  let classlist

  if (obj.class) {
    classlist = 'button ' + obj.class
  } else {
    classlist = 'button'
  }

  if (obj.icon) {
    children[0] = {
      tag: 'span',
      data: { class: 'button-icon' },
      children: obj.icon
    }
  }

  if (slot) {
    children[children.length] = {
      tag: 'span',
      data: { class: 'button-label' },
      children: slot
    }
  }

  return {
    tag: 'a',
    data: {
      class: classlist,
      href: obj.href,
      onclick: obj.onclick,
      onkeydown (e) {
        if (e.keyCode === 13) {
          obj.onclick()
        }
      },
      tabindex: '0'
    },
    children
  }
}
