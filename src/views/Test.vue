<template>
	<v-container
    align-center 
    d-flex 
    fluid 
    class="pa-0 dashboard-container"
  >
    <ExamsView/>
  </v-container>
</template>

<script>
import ExamsView from '@/components/view_exams/ExamsView'

export default {
	name: 'Test',
  components: {
    ExamsView
  },
	data () { return {} },
	methods: {}
}
</script>

<style scoped>
  .dashboard-container {
    height: 100%;
    background-color: #F3F3F6;
  }
</style>
