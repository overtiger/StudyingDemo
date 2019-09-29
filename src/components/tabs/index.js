import Tabs from './tabs.vue'
import Tab from './tab.vue'

export default (vue) => {
  vue.component(Tabs.name, Tabs)
  vue.component(Tab.name, Tab)
}
