<template>
	<v-container>
		<v-row align="start">
			<v-col
				cols="12"
				sm="12"
				md="6"
				lg="6"
			>
				<h3 class="display-2 mb-5">
					Obtén el nivel de inglés que necesitas para graduarte de la universidad
				</h3>
				<p class="subtitle-1">
					Prepárate con nuestra metodología online y convalida el inglés
				</p>
				<v-col
					cols="12"
					sm="12"
					md="6"
					lg="6"
					align="start"
					class="ma-0 pa-0"
				>
					<v-btn
						rounded
						x-large
						color="success"
						:to="{ name: 'register' }"
						class="ma-0"
					>
						Regístrate Gratis
					</v-btn>
					<p class="subtitle-1 ml-4 mt-3">
						Pruebalo por 7 días gratis
					</p>
				</v-col>
			</v-col>
			<v-col
				cols="12"
				sm="12"
				md="6"
				lg="6"
				align="center"
			>
				<img
					:src="landingMain"
					alt="landing"
					style="max-width: 500px"
				>
			</v-col>
		</v-row>
		<v-row align="center">
			<v-col
				cols="12"
				sm="12"
				md="12"
				lg="12"
			>
				<h3
					class="display-1 mt-6"
					align="center"
				>
					¡Prepárate con nosotros!
				</h3>
				<p class="title mt-4">
					Ten la preparación que necesitas para aprobar tu exámen de diagnóstico de la universidad y obtén el nivel de inglés necesario para graduarte
				</p>
			</v-col>
		</v-row>
		<v-row align="start">
			<v-col
				v-for="(feature, index) in features"
				:key="index"
				cols="12"
				sm="12"
				md="4"
				lg="4"
				align="center"
			>
				<img
					:src="feature.image"
					:alt="feature.title"
					style="max-width: 250px"
				>
				<h3 class="display-1 mt-6">
					{{ feature.title }}
				</h3>
				<p class="title mt-4">
					{{ feature.desc }}
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'Home',

	data () {
		return {
			landingMain: require('@/assets/images/landing_main.png'),
			features: [
				{ image: require('@/assets/images/1y4.png'), title: 'Sigue tu progreso', desc: 'Sabrás en que nivel te encuentras y cuanto te falta para el nivel indicado' },
				{ image: require('@/assets/images/2.png'), title: 'Aprende a tu ritmo', desc: 'Sabrás en que te equivocas, porqué y que hacer para mejorar' },
				{ image: require('@/assets/images/3.png'), title: 'Disponible siempre', desc: 'Donde y cuando quieras' }
			]
		}
	},

	computed: {
	},

	methods: {

	}
}
</script>

<style lang="scss">
</style>
