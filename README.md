This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start

Install:

```
yarn add @datopian/map-builder
```

Usage:

```javascript
import { MapBuilder } from '@datopian/map-builder'

function App() {
  // View should have compiled resources so that schema is available
  const view = {
    resources: [...]
  }
  // Define redux `action`

  return (
    <MapBuilder view={view} dataViewBuilderAction={action} />
  )
}
```

## Dev

We use `cosmos` to do dev:

```
yarn cosmos
```

Checkout `__fixtures__` dir for details.

## Compile package

For publication, run `yarn build:package` to compile package to `/dist` using babel
