<template>
  <tabs :value="tabValue" @change="handleChange">
    <tab lable="tab1" index="1">
      <span>content 1{{inputContent}}</span>
    </tab>
    <tab index="2">
      <span slot="label" style="color: red">tab2</span>
      <span>content 2</span>
    </tab>
    <tab lable="tab3" index="3">
      <span>content 3</span>
    </tab>
  </tabs>
</template>
<script>
import tabs from './tabs.vue'
export default {
  data() {
    return {
      tabValue: '1',
      inputContent: '',
    }
  },
  components: {
    tabs,
  },
  methods: {
    handleChange(value) {
      this.tabValue = value
    },
  },
}
</script>