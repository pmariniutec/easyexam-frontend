<template> 

	<v-container
		class="fill-height"
		fluid
	>
		<v-row
			align="center"
			justify="center"
		>
			<v-col
				cols="12"
				sm="12"
				lg="6"
				md="8"
				align="center"
			>
				<v-card
					class="elevation-12"
					width="80%"
				>
					<v-toolbar
						flat
					>
						<v-toolbar-title>Ingresa</v-toolbar-title>
						<div class="flex-grow-1" />
					</v-toolbar>
					<v-form @submit.prevent>
						<v-card-text>
							<v-text-field
								id="email"
								v-model="inputData.email"
								label="Correo"
								name="email"
								prepend-icon="mdi-email"
								type="email"
								:class="{ 'error--text': error }"
								:rules="[rules.required, rules.email]"
							/>

							<v-text-field
								id="password"
								v-model="inputData.password"
								label="Contraseña"
								name="password"
								prepend-icon="mdi-lock"
								type="password"
								:class="{ 'error--text': error }"
							/>
							<h3
								v-if="error"
								class="body-1 red--text"
								align="center"
							>
								{{ error }}
							</h3>
						</v-card-text>
						<v-card-actions>
							<v-btn
								text
								class="forgot-password"
								@click="forgotPassword"
							>
								¿Olvidaste tu contraseña?
							</v-btn>
						</v-card-actions>
						<v-card-actions>
							<v-btn
								type="submit"
								@click="userLogin"
							>
								Ingresar
							</v-btn>
						</v-card-actions>
					</v-form>
				</v-card>
			</v-col>
			<v-col
				cols="12"
				align="center"
			>
				¿No tienes una cuenta?
				<router-link :to="{ name: 'register' }">
					Regístrate
				</router-link>
			</v-col>
		</v-row>
	</v-container>

</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data () {
		return {
			inputData: {
				email: '',
				password: ''
			},
			error: null,
			rules: {
				required: value => !!value || 'Required',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Must be a valid email'
				}
			}
		}
	},

	methods: {
		...mapActions('auth', ['login']),

		userLogin () {
			this.error = null
			const { email, password } = this.inputData

			this.login({ email, password })
				.then(() => this.$router.push('/profile'))
				.catch(() => {
					this.error = 'Invalid Credentials'
				})
		},

		// TODO
		forgotPassword () {

		}
	}
}
</script>

<style scoped>
.v-card__actions {
	justify-content: center;
}
.v-application a {
	color: #000;
	text-decoration: none;
	font-size: 1.2rem;
}
.forgot-password {
	font-size: 12px;
}
.facebook-login {
	color: blue;
}
.google-login {
	color: green;
}
.v-text-field .error--text .v-label {
	color: #ff5252 !important;
    caret-color: #ff5252 !important;
}
</style>
