<template>
	<div>
		<v-card-title
			primary-title
		>
			<v-row>
				<h1>My profile</h1>
			</v-row>
		</v-card-title>

		<div class="profile-container">
			<form>
				<Input
					v-model="user.firstName"
					title="First Name"
				/>
				<Input
					v-model="user.lastName"
					title="Last Name"
				/>
				<div class="user-email-container">
					<p class="user-email-header">
						Email
					</p>
					<p class="user-email">
						{{ getUserObj.email }}
					</p>
				</div>
			</form>
		</div>
		<Button
			text="Save"
			@click="updateUser"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default {
	name: 'ProfilePanel',
	components: {
		Input,
		Button
	},
	data: () => ({
		user: {
			firstName: '',
			lastName: '',
			email: ''
		}
	}),
	computed: {
		...mapGetters('auth', ['getUser']),
		getUserObj () {
			return this.getUser
		}
	},
	beforeMount () {
		this.fetchUser()
			.then(() => {
				this.user = this.getUser
			})
	},
	methods: {
		...mapActions('auth', ['userDetail', 'updateAccount']),
		fetchUser: async function () {
			await this.userDetail()
		},
		updateUser: function () {
			let obj = { 'firstName': this.user.firstName, 'lastName': this.user.lastName }
			this.updateAccount(obj)
				.then(() => {
					this.fetchUser()
				})
		}
	}

}
</script>

<style lang="scss" scoped>
	.panel-container {
	  height: 96vh;
	  overflow-y: auto;
	}

	.profile-container {
		padding: 18px 3px;
	}

	.user-email-container {
		position: relative;
    top: -25px;
	}

	.user-email-header {
		font-size: 12px;
    color: #67707D;
	}

	.user-email {
		position: relative;
		top: -10px;
		border: 1px solid #DBDBDB;
		border-radius: 12px;
		padding: 7px;
		height: 40px;
		margin-bottom: 0;
	}
</style>
