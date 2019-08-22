import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { MapBuilder } from './MapBuilder';


const view = {
  resources: [
    {
      name: 'test',
      schema: {
        fields: [
          {
            name: 'a',
            type: 'string'
          },
          {
            name: 'b',
            type: 'string'
          },
          {
            name: 'c',
            type: 'string'
          }
        ]
      }
    }
  ]
}


it('renders UI', () => {
  const { container } = render(<MapBuilder view={view} dataViewBuilderAction={() => {}} />)
  expect(container).toMatchSnapshot()
});


it('shows error message for non-compiled view', () => {
  const view = {}
  const { container } = render(<MapBuilder view={view} dataViewBuilderAction={() => {}} />)
  expect(container).toMatchSnapshot()
});


it('shows error message if no schema', () => {
  const view = {
    resources: [
      {
        name: 'no-schema'
      }
    ]
  }
  const { container } = render(<MapBuilder view={view} dataViewBuilderAction={() => {}} />)
  expect(container).toMatchSnapshot()
});
