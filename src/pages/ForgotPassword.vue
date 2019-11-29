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
      z-index: 0;"
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
						<v-toolbar-title class="login-card-title">
							Forgot Password
						</v-toolbar-title>
						<div class="flex-grow-1" />
					</v-toolbar>
					<v-form
						ref="form"
						v-model="valid"
						@submit.prevent
					>
						<v-card-text class="login-card-input">
							<v-text-field
								id="email"
								v-model="inputData.email"
								label="email"
								name="email"
								type="email"
								:class="{ 'error--text': error }"
								required
								:rules="[rules.email]"
							/>
							<h3
								v-if="message && forgotPasswordError"
								class="body-1 red--text"
								align="center"
							>
								{{ message }}
							</h3>
							<h3
								v-if="message && !forgotPasswordError"
								class="body-1"
								align="center"
							>
								{{ message }}
								Going back to Login.
							</h3>
							<v-progress-circular
								v-if="inForgotPasswordRequest"
								indeterminate
								color="red"
							/>
						</v-card-text>
						<v-card-actions>
							<v-btn
								class="login-btn"
								:disabled="!valid"
								type="submit"
								@click="resetPassword"
							>
								Reset Password
							</v-btn>
						</v-card-actions>
						<h3 class="go-to-register">
							<router-link
								:to="{ name: 'login' }"
								class="go-to-register"
							>
								Wrong move? Sign In
							</router-link>
						</h3>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import LoginBackground from '@/components/LoginBackground'
import LoginBookPile from '@/components/LoginBookPile'

export default {
	name: 'ForgotPassword',
	components: {
		LoginBackground,
		LoginBookPile
	},
	data () {
		return {
			inputData: {
				email: ''
			},
			valid: true,
			message: null,
			rules: {
				required: value => !!value || 'Required',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Must be a valid email'
				}
			}
		}
	},
	computed: {
		...mapState('auth', ['forgotPasswordError', 'inForgotPasswordRequest'])
	},
	methods: {
		...mapActions('auth', ['login', 'sendAccountPasswordResetEmail']),
		sleep (milliseconds) {
			return new Promise(resolve => setTimeout(resolve, milliseconds))
		},
		resetPassword () {
			this.sendAccountPasswordResetEmail(this.inputData)
				.then((data) => {
					this.message = data
					this.sleep(3000).then(() => {
						this.$router.push({ name: 'login' })
					})
				})
				.catch((error) => {
					this.message = error
				})
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
	height: 50px !important;
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
