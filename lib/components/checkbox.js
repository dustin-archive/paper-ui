export default (checked, children) => ({
  tag: 'label',
  data: { class: 'checkbox' },
  children: [
    { tag: 'input', data: { type: 'checkbox', checked } },
    { tag: 'span', children }
  ]
})
