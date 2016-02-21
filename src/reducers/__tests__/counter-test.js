jest.autoMockOff() 

let counter = require('../index').default

describe('counter', () => {
  it('should provide the initial state', () => {
    expect(counter(undefined, {}).counter).toBe(0)
  })

  it('should handle INCREMENT action', () => {
    expect(counter({counter: 1}, { type: 'INCREMENT' }).counter).toBe(2)
  })

  it('should handle DECREMENT action', () => {
    expect(counter({counter: 1}, { type: 'DECREMENT' }).counter).toBe(0)
  })

  it('should ignore unknown actions', () => {
    expect(counter({counter: 1}, { type: 'unknown' }).counter).toBe(1)
  })
})
