export const state = () => ({
  statuses: [ {...defaultOption}, { value: 'AVAILABLE', text: 'Available' }, { value: 'DISCONTINUED', text: 'Discontinued' }]
})

const defaultOption = { value: null, text: 'Please select' }
