import { MapBuilder } from '../src/MapBuilder.js'


const view = {
  resources: [
    {
      name: 'test'
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
