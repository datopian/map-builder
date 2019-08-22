import { MapBuilder } from '../src/MapBuilder.js'


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

const dataViewBuilderAction = (view) => {
  alert(JSON.stringify(view))
}

export default {
  component: MapBuilder,
  props: {view, dataViewBuilderAction}
};
