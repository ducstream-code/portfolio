export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PageFooter = () => import('../../components/PageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c))
export const PageHeader = () => import('../../components/PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const PageMain = () => import('../../components/PageMain.vue' /* webpackChunkName: "components/page-main" */).then(c => wrapFunctional(c.default || c))
export const PhotoComponents = () => import('../../components/PhotoComponents.vue' /* webpackChunkName: "components/photo-components" */).then(c => wrapFunctional(c.default || c))
export const ProjectElement = () => import('../../components/ProjectElement.vue' /* webpackChunkName: "components/project-element" */).then(c => wrapFunctional(c.default || c))
export const ProjectMain = () => import('../../components/ProjectMain.vue' /* webpackChunkName: "components/project-main" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
