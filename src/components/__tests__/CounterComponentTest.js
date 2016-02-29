// jest.autoMockOff()
//
// const React = require('react-native')
// const utils = require('react-addons-test-utils')
//
// jest.dontMock('../Counter')
// var Counter = require('../Counter').default
//
// describe('Counter component', () => {
//
//   let counterComponent
//
//   const counterProps = {
//     counter: 0,
//     increment: {
//       type: 'INCREMENT'
//     },
//     decrement: {
//       type: 'DECREMENT'
//     },
//   }
//
//   function renderCounter(props) {
//     const renderer = utils.createRenderer()
//     renderer.render(<Counter {...props}/>)
//     const output = renderer.getRenderOutput()
//
//     return {
//       props,
//       output,
//       renderer
//     }
//   }
//
//   beforeEach(() => {
//     counterComponent = renderCounter(counterProps)
//   })
//
//   it('should display count', () => {
//     console.log(counterComponent.renderer._instance._renderedComponent)
//     There's no way to obtain the value of a Text component in React-Native
//     There's also no way to simulate a touch in React-Native
//     Redux is the only thing that can be tested
//   })
// })
