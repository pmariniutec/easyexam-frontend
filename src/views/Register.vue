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
						<v-toolbar-title>Regístrate</v-toolbar-title>
						<div class="flex-grow-1" />
					</v-toolbar>
					<v-card-text>
						<v-form
							:model="valid"
							class="register-form"
						>
							<v-row>
								<v-col
									cols="6"
								>
									<v-text-field
										v-model="inputData.firstName"
										label="Nombre"
										name="first-name"
										prepend-icon="mdi-account"
										type="text"
									/>
								</v-col>
								<v-col
									cols="6"
								>
									<v-text-field
										v-model="inputData.lastName"
										label="Apellido"
										name="last-name"
										type="text"
									/>
								</v-col>
								<v-col
									cols="12"
								>
									<v-text-field
										v-model="inputData.email"
										label="Correo"
										name="email"
										prepend-icon="mdi-email"
										type="email"
										style="padding-top: 0"
									/>

									<v-text-field
										id="password"
										v-model="inputData.password"
										label="Contraseña"
										name="password"
										prepend-icon="mdi-lock"
										type="password"
									/>
								</v-col>
							</v-row>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn @click="register">
							Crear Cuenta
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col
				cols="12"
				align="center"
			>
				¿Ya tienes una cuenta?
				<router-link :to="{ name: 'register' }">
					Ingresa
				</router-link>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Register',
	data () {
		return {
			inputData: {
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			},
			valid: null
		}
	},

	methods: {
		...mapActions('auth', ['createAccount']),

		// TODO: Validation
		register () {
			this.error = null
			const { firstName, lastName, email, password } = this.inputData
			authService.createAccount(firstName, lastName, email, password)
				.then(() => this.$router.push({ name: 'complete-profile' })
					.catch(() => {
							console.log("Error, lol.")
					}))
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
	.register-form .col {
		padding-top: 0;
	}
	.facebook-register {
		color: blue;
	}
	.google-register {
		color: green;
	}
</style>
