<script>
import TabContainer from './tab-container.vue'

export default {
  name: 'Tabs',
  props: {
    value: [String, Number],
    required: true,
  },
  components: {
    TabContainer,
  },
  // provide() {
  //   return {
  //     value: this.value,
  //   }
  // },
  data() {
    return {
      panes: [],
    }
  },
  render() {
    const contents = this.panes.map((pane) => {
      return pane.active ? pane.$slots.default : null
    })
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  },
  methods: {
    onChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="stylus" scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
