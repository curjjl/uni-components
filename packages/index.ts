import type { App } from 'vue'
import { Button } from './components'

const components = [Button]

const install = (app: App) => {
  components.forEach(component => {
    if (component.install) {
      app.use(component)
    }
  })
}

export { install, Button }

export * from './components'
export * from './types/common'
export * from './theme'

export default { install }