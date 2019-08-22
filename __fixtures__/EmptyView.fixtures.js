import { MapBuilder } from '../src/MapBuilder.js'


const view = {}

const dataViewBuilderAction = (view) => {
  alert(JSON.stringify(view))
}

export default {
  component: MapBuilder,
  props: {view, dataViewBuilderAction}
};
