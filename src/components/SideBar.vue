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
									:color="item.color"
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
                                @click="$emit('change-tab-evemt', 'credits')"
                            >
                                {{ getUserObj.points }}
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
								<v-icon size="30">
									mdi-close
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

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'SideBar',
	data: () => ({
		items: [
			{
				title: 'Home',
				icon: 'mdi-home',
				name: 'courses'
			},
			{
				title: 'Exams',
				icon: 'mdi-library-books',
				name: 'exams'
			},
			{
				title: 'New Exam',
				icon: 'mdi-pencil-plus-outline',
				name: 'examEditor',
				color: 'primary'
			},
            {
                title: 'Contribute',
                icon: 'mdi-hand-heart',
                name: 'contribute'
            }
		],
		mini: true
	}),
    beforeMount() {
        this.fetchUser()
    },
    computed: {
        ...mapGetters('auth', ['getUser']),
        getUserObj () {
            return this.getUser
        }
    },
    methods: {
        ...mapActions('auth', ['userDetail']),
        fetchUser: async function () {
            await this.userDetail
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
