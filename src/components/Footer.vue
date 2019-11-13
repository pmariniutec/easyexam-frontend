<template>
	<v-footer padless>
		<v-card
			class="flex"
			flat
		>
			<v-card-title>
				<div class="flex-grow-1" />

				Síguenos
				<v-btn
					v-for="icon in icons"
					:key="icon"
					class="ml-4"
					dark
					icon
				>
					<v-icon
						size="24px"
						color="black"
					>
						{{ icon }}
					</v-icon>
				</v-btn>
			</v-card-title>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			icons: [
				'mdi-facebook',
				'mdi-instagram'
			]
		}
	}
}
</script>

<style>

</style>
