<template>
	<v-container
    align-center 
    d-flex 
    fluid 
    class="pa-0 dashboard-container"
  >
    <SideBar/>
    <SearchBar/>
    <CreateExamDialog/>
  </v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import SearchBar from '@/components/SearchBar'
import CreateExamDialog from '@/components/CreateExamDialog'

export default {
	name: 'Dashboard',
  components: {
    SideBar,
    SearchBar,
    CreateExamDialog
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
