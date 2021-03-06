import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LoadingProvider } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <LoadingProvider>
        <p>Hello world!</p>
      </LoadingProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
