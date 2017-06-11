export default obj => ({
  tag: 'input',
  data: {
    class: 'input',
    label: obj.label,
    oninput: obj.oninput,
    tabindex: '0',
    type: 'text'
  }
})
