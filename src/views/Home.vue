<template>
	<v-container style="height: 100%;" align-center d-flex fluid class="pa-0">
		<v-layout align-center column>
      <v-flex class="mb-10">
			  <h3 class="display-2">
			    ¡Crea tus exámenes de manera easy!
			  </h3>
      </v-flex>
      <v-flex class="mb-4">
			  <v-btn
			  	rounded
			  	x-large
			  	color="success"
			  	:to="{ name: 'register' }"
		  		class="ma-0"
		  	>
		  		Regístrate Gratis
		  	</v-btn>
      </v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Home',
	data () { return {} },
	computed: {},
	methods: {}
}
</script>

<style lang="scss">
</style>
