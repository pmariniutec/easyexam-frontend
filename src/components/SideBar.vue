<template>
	<v-card class="sidebar">
		<v-navigation-drawer
			permanent
			:mini-variant="mini"
			mini-variant-width="70px"
			style="position: relative"
		>
			<v-list>
				<v-list-item
					@click="mini = !mini"
				>
					<v-list-item-icon style="margin: auto">
						<v-icon
							v-if="mini"
							size="30"
						>
							mdi-menu
						</v-icon>
						<v-icon
							v-else
							size="30"
						>
							mdi-backburger
						</v-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list>

			<div class="tabs">
				<div>
					<v-list>
						<v-list-item
							v-for="item in items"
							:key="item.title"
							@click="$emit('change-tab-event', item.name)"
						>
							<v-list-item-icon>
								<v-icon
									size="30"
									:color="(item.title == currentTab) ? 'primary' : ''"
								>
									{{ item.icon }}
								</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title style="color: #717171;">
									{{ item.title }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>

				<div style="position: absolute; bottom: 0; width: 100%; text-align: center;">
					<v-list>
						<v-list-item>
							<v-chip
								color="secondary"
							>
								{{ user.points }}
							</v-chip>
						</v-list-item>
						<v-list-item
							@click="$emit('change-tab-event', 'profile')"
						>
							<v-list-item-icon style="margin:auto">
								<v-icon size="30">
									mdi-account
								</v-icon>
							</v-list-item-icon>
						</v-list-item>
						<v-list-item
							@click="$emit('change-tab-event', 'logout')"
						>
							<v-list-item-icon style="margin:auto">
								<v-icon
									size="30"
									color="purple darken-3"
								>
									mdi-logout
								</v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-list>
				</div>
			</div>
		</v-navigation-drawer>
	</v-card>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
	name: 'SideBar',
	props: {
		currentTab: {
			type: String,
			default: ''
		}
	},
	data: () => ({
		items: [
			{
				title: 'Home',
				icon: 'mdi-home',
				name: 'home'
			},
			{
				title: 'Exams',
				icon: 'mdi-library-books',
				name: 'exams'
			}
		],
		mini: true
	}),
	beforeMount () {
		this.fetchUser()
	},
	computed: {
		...mapState('auth', ['user'])
	},
	methods: {
		...mapActions('auth', ['userDetail']),
		fetchUser: async function () {
			await this.userDetail()
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
	max-width: 180px;
	position: fixed;
	height: 100vh;
	margin: 0 4vh 0 0;
  left: 0;
  top: 0;
}
</style>
