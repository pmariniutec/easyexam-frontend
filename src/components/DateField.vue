<template>
	<v-menu
		ref="menu"
		v-model="menu"
		:close-on-content-click="false"
		:return-value.sync="date"
		transition="scale-transition"
		offset-y
		min-width="290px"
	>
		<template v-slot:activator="{ on }">
			<v-text-field
				v-model="date"
				label="Date"
				readonly
				v-on="on"
			/>
		</template>
		<v-date-picker
			v-model="date"
			no-title
			scrollable
		>
			<v-spacer />
			<v-btn
				text
				color="primary"
				@click="menu = false"
			>
				Cancel
			</v-btn>
			<v-btn
				text
				color="primary"
				@click="$refs.menu.save(date)"
			>
				OK
			</v-btn>
		</v-date-picker>
	</v-menu>
</template>

<script>
export default {
	name: 'DateField',
	props: ['date'],
	data: () => ({
		menu: ''
	})
}
</script>

<style scoped>
</style>
