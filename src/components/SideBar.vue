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
							@click="$emit('change-tab-event', item.href)"
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
					<v-chip
						color="secondary"
					>
						{{ points }}
					</v-chip>
					<span>
						points
					</span>
					<v-list>
						<v-list-item
							@click="$emit('change-tab-event', 'dashboard/profile')"
						>
							<v-list-item-icon style="margin:auto">
								<v-icon size="30">
									mdi-account
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
export default {
	name: 'SideBar',
	data: () => ({
		items: [
			{
				title: 'Home',
				icon: 'mdi-home',
				href: 'dashboard'
			},
			{
				title: 'Courses',
				icon: 'mdi-book-multiple',
				href: 'dashboard/courses'
			},
			{
				title: 'Exams',
				icon: 'mdi-library-books',
				href: 'dashboard/exams'
			},
			{
				title: 'New Exam',
				icon: 'mdi-pencil-plus-outline',
				href: 'dashboard/exam-editor',
				color: 'primary'
			}
		],
		mini: true,
		points: 30
	}),
	computed: {}
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
