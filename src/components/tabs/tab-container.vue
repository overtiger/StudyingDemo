<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true,
    },
  },
  render() {
    const contends = this.panes.map((pane) => {
      return pane.active ? pane.$slots.default : null
    })

    return <div class="tab-container">{contends}</div>
  },
}
</script>