<template>
	<v-container
		class="fill-height"
		fluid
	>
		<RegisterBookPile
			style="
			z-index:1;"
		/>
		<RegisterBackground
			height="1263.18"
			width="1506"
			fill="#fd7576"
			view-box="425 -125 800 1263.184"
			custom-style="
			padding: 0 0;
			overflow: inherit;
			transform: scale(0.8);
			transform-origin: right;
			position: fixed;
			top: -305px;
			right: -30%;"
		/>

		<v-row
			class="register-card-div"
		>
			<v-col
				cols="12"
				sm="12"
				lg="6"
				md="8"
				align="center"
			>
				<v-card
					class="register-card"
				>
					<v-toolbar
						flat
						class="register-card-title"
					>
						<v-toolbar-title class="register-card-title">
							Create account
						</v-toolbar-title>
						<div class="flex-grow-1" />
					</v-toolbar>
					<v-card-text class="register-card-input">
						<v-form
							:model="valid"
							class="register-form"
						>
							<v-text-field
								v-model="inputData.firstName"
								label="name"
								name="first-name"
								type="text"
								required
							/>
							<v-text-field
								v-model="inputData.lastName"
								label="last name"
								name="last-name"
								type="text"
								required
							/>
							<v-text-field
								v-model="inputData.email"
								label="email"
								name="email"
								type="email"
								required
							/>
							<v-text-field
								id="password"
								v-model="inputData.password"
								label="password"
								name="password"
								type="password"
								autocomplete="new-password"
								:rules="[rules.password]"
							/>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn
							class="register-btn"
							@click="register"
						>
							Crear Cuenta
						</v-btn>
					</v-card-actions>
					<h3 class="go-to-login">
						<router-link
							:to="{ name: 'login' }"
							class="go-to-login"
						>
							Already have an account? Sign In
						</router-link>
					</h3>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'

import RegisterBackground from '@/components/RegisterBackground'
import RegisterBookPile from '@/components/RegisterBookPile'

export default {
	name: 'Register',
	components: {
		RegisterBackground,
		RegisterBookPile
	},
	data () {
		return {
			inputData: {
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			},
			valid: null,
			role: ['ROLE_TEACHER'],
			rules: {
				password: value => value.length >= 6 || 'Min 6 characters'
			}
		}
	},
	methods: {
		...mapActions('auth', ['createAccount']),

		// TODO: Validation
		register () {
			this.error = null
			const { firstName, lastName, email, password } = this.inputData
			const payload = { ...this.inputData, role: this.role }

			this.createAccount(payload)
				.then(() => {
					this.$router.push({ name: 'login' })
				})
				.catch(() => {
					console.log('Error, lol.')
				})
		}
	}
}
</script>

<style scoped>
	.register-card-div {
		position: relative;
		right: 3%;
	}
	.register-card {
		background-color: unset !important;
		box-shadow: unset;
		width: 70%;
	}
	.register-card-title {
		background-color: unset !important;
	}
	.register-card-title, .register-card-input {
		color: #67707D !important;
		font-family: Helvetica;
		font-weight: bold;
	}
	.register-btn {
		background-color: #FEC85D !important;
		box-shadow: none !important;
		color: white !important;
		padding: unset !important;
		font-family: Helvetica !important;
		font-weight: bold !important;
		opacity: unset !important;
		width: 100%;
		height: 50px !important;
	}
	.register-card-input {
		padding-bottom: 2px;
	}
	@media (max-width: 1000px) {
		.register-card-div {
			right: 0% !important;
		}
	}

	@media (max-width: 1264px) {
	  .login-card-div {
	    right: 2%;
	  }
		.register-card {
			width: 50%;
		}
	}
	.go-to-login {
		font-size: 12px !important;
		color: #67707D !important;
		font-family: Helvetica;
		text-align: left;
	  position: relative;
	  left: 4px;
	}
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
