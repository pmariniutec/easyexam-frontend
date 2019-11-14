<template>
  <div class="searchbar">
    <v-row>
      <v-col
        cols="12"
        sm="1"
        md="1"
        lg="1"
      >
        <IconSearch class='icon-search'/>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        md="8"
        lg="8"
      >
       <input v-model="message" placeholder="search..">
      </v-col>
      <v-col
        cols="12"
        sm="1"
        md="1"
        lg="1"
      >
      </v-col>
      <v-col
        cols="12"
        sm="2"
        md="2"
        lg="2"
      >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch'

export default {
	name: 'SearchBar',
  components: {
    IconSearch
  },
	data () {
    return {
      initial: 'Initial value',
    } 
  },
	computed: {}
}
</script>

<style lang="scss" scoped>
.searchbar {
  position: absolute;
  top: 0;
  width: 87vw;
  height: 70px;
  margin: 30px 0 0 110px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.icon-search {
  margin: 6px 0 0 20px;
}
.input-search {
  margin-top: 10px;
}
</style>

