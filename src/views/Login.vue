<template>
	<v-container
		class="fill-height"
		fluid
	>
		<LoginBookPile
			style="
				z-index:1;
			"
		/>
		<LoginBackground
			height="1263.18"
			width="1506"
			fill="#4DB8DE"
			view-box="425 -125 800 1263.184"
			style="
		padding: 0 0;
		overflow: inherit;
		transform: scale(0.8);
		transform-origin: left;
		position: fixed;
		top: -80px;
		left: -14%;
		z-index: 0;
		"
		/>
		<v-row
			class="login-card-div"
		>
			<v-col
				cols="12"
				sm="12"
				lg="6"
				md="8"
				align="center"
			>
				<v-card
					class="login-card"
				>
					<v-toolbar
						flat
						class="login-card-title"
					>
						<v-toolbar-title class="login-card-title">Welcome back</v-toolbar-title>
						<div class="flex-grow-1" />
					</v-toolbar>
					<v-form @submit.prevent>
						<v-card-text class="login-card-input">
							<v-text-field
								id="email"
								v-model="inputData.email"
								label="email"
								name="email"
								type="email"
								:class="{ 'error--text': error }"
								:rules="[rules.required, rules.email]"
							/>

							<v-text-field
								id="password"
								v-model="inputData.password"
								label="password"
								name="password"
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
						<h3 class="forgot-password" @click="forgotPassword">
							<router-link :to="{name: forgot-password}" class="forgot-password">
								Forgot your password?
							</router-link>
						</h3>
						</v-card-text>
					<v-card-actions>
							<v-btn
								class="login-btn"
								type="submit"
								@click="userLogin"
							>
								LOGIN
							</v-btn>
						</v-card-actions>
							<h3 class="go-to-register">
							<router-link :to="{ name: 'register' }" class="go-to-register">
								Don’t have an account? Sign Up
							</router-link>
						</h3>

					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
import LoginBackground from '@/components/LoginBackground'
import LoginBookPile from '@/components/LoginBookPile'

export default {
	name: 'Login',
	components: {
		LoginBackground,
		LoginBookPile
	},
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
			this.login(this.inputData)
				.then(() => this.$router.push('/dashboard'))
				.catch(() => {
					console.log('Invalid credentials.')
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
.v-application {
	background-color: #F3F3F6;
}
.v-application a {
	color: #000;
	text-decoration: none;
	font-size: 1.2rem;
}
.login-card-div {
	position: relative;
	left: 53%;
}
.login-card {
	background-color: unset !important;
	box-shadow: unset;
	width: 70%;
}
.login-card-title {
	background-color: unset !important;
}
.login-card-title, .login-card-input {
	color: #67707D !important;
	font-family: Helvetica;
	font-weight: bold;
}
.login-card-input {
	border-width: 4px 0 0 0 !important;
}
@media (max-width: 1000px) {
	.login-card-div {
		left: 0% !important;
	}
}

@media (max-width: 1264px) {
  .login-card-div {
    left: 20%;
  }
	.login-card {
		width: 50%;
	}
	.login-card-input, .v-text-field {
		color: white !important;
	}
}
.login-btn {
	background-color: #FD7576 !important;
	box-shadow: none !important;
	color: white !important;
	padding: unset !important;
	font-family: Helvetica !important;
	font-weight: bold !important;
	opacity: unset !important;
	width: 100%;
}
.forgot-password {
	font-size: 10px !important;
	color: #67707D !important;
	font-family: Helvetica;
	text-align: right;
}
.go-to-register {
	font-size: 12px !important;
	color: #67707D !important;
	font-family: Helvetica;
	text-align: left;
  position: relative;
  left: 4px;
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
