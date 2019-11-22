<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
	>
		<v-row no-gutters>
			<v-col
				class="sidebar-container"
			>
				<SideBar
					@change-tab-event="changeTab"
				/>
			</v-col>
			<BaseContainer>
				<ProfilePanel />
			</BaseContainer>
		</v-row>
	</v-container>
</template>

<script>
import BaseContainer from '@/components/BaseContainer'
import SideBar from '@/components/SideBar'
import ProfilePanel from '@/components/ProfilePanel'

export default {
	name: 'Profile',
	components: {
		SideBar,
		ProfilePanel,
    BaseContainer
	},
	data: () => ({}),
	methods: {
		changeTab: function (href) {
			this.$router.push({name: href})
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 180px;
}
.panel-container {
  padding: 2vh;
}
</style>
