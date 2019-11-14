<template>
	<v-toolbar>
		<router-link
			:to="{ name: 'home' }"
			class="main-logo"
		>
		</router-link>
		<v-spacer />
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn
				text
				:to="{ name: 'create-exam' }"
				rounded
			>
				Create Exam
			</v-btn>
			<v-btn
				v-if="!isAuthenticated"
				text
				:to="{ name: 'login' }"
				rounded
			>
				Login
			</v-btn>
			<v-btn
				v-if="!isAuthenticated"
				text
				:to="{ name: 'register' }"
				outlined
				rounded
			>
				Regístrate
			</v-btn>
			<template v-if="isAuthenticated">
				<v-btn
					icon
					:to="{ name: 'profile' }"
					rounded
					color="primary"
				>
					<v-icon color="primary">
						mdi-account
					</v-icon>
				</v-btn>
				<div class="pl-2 pr-2" />
				<v-btn
					icon
					:to="{ name: 'logout' }"
					rounded
				>
					<v-icon color="error">
						mdi-logout
					</v-icon>
				</v-btn>
			</template>
		</v-toolbar-items>
		<v-menu class="hidden-md-and-up">
			<template v-slot:activator="{ on }">
				<v-app-bar-nav-icon
					class="hidden-md-and-up "
					v-on="on"
				/>
			</template>
			<v-list>
				<v-list-item
					:to="{ name: 'create-exam' }"
				>
					<v-list-item-title>
						Create Exam
					</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="!isAuthenticated"
					:to="{ name: 'login' }"
				>
					<v-list-item-title>
						Login
					</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="!isAuthenticated"
					:to="{ name: 'register' }"
				>
					<v-list-item-title>
						Registrate
					</v-list-item-title>
				</v-list-item>
				<template v-if="isAuthenticated">
					<v-list-item
						:to="{ name: 'Profile' }"
					>
						<v-list-item-title>
							Profile
						</v-list-item-title>
					</v-list-item>
					<v-list-item
						:to="{ name: 'logout' }"
					>
						<v-list-item-title>
							Logout
						</v-list-item-title>
					</v-list-item>
				</template>
			</v-list>
		</v-menu>
	</v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'TopNav',
	data () {
		return {

		}
	},

	computed: {
		...mapGetters('auth', ['isAuthenticated'])
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.theme--light.v-btn {
	color: $primary;
}
.theme--light.v-btn.v-btn--outlined.v-btn--text {
	border-color: $primary;
}
.v-toolbar__items {
	padding: 10px;
}
.v-toolbar__items > .v-btn--rounded {
	border-radius: 28px;
}
.theme--light.v-sheet {
	max-height: 64px;
}
.main-logo {
	display: flex;
	align-items: center;
}
.v-btn:not(.v-btn--round).v-size--default {
	margin: 0 5px;
}
</style>
