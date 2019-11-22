<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
		style="height: 100%;"
	>
		<v-row
			no-gutters
			style="height: 100%;"
		>
			<v-col
				class="sidebar-container"
			>
				<SideBar
					@change-tab-event="changeTab"
				/>
			</v-col>
			<div class="dashboard-container">
				<div class="recent-exams-wrapper">
					<RecentExams />
				</div>
				<div class="others-wrapper">
					<HomePanel />
					<HomePanel />
				</div>
			</div>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import HomePanel from '@/components/HomePanel'
import RecentExams from '@/components/RecentExams'

export default {
	name: 'Dashboard',
	components: {
		SideBar,
		HomePanel,
		RecentExams
	},
	data: () => ({}),
	methods: {
		changeTab: function (href) {
			this.$router.push({ name: href })
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 180px;
}

	.dashboard-container {
		margin: 55px 8% 0 0;
		width: 78%;
		max-height: 80%;
	}

	.recent-exams-wrapper {
		width: 50%;
		display: contents;
	}

	.others-wrapper {
		width:50%;
		height: 100%;
    display: contents;
	}
</style>
