<template>
	<v-card
		class="panel-container"
	>
		<v-card-title
			primary-title
		>
			<v-row>
				<v-col cols="10">
					My profile
				</v-col>
				<v-col
					cols="2"
					align="right"
					class="px-6"
				>
					<v-btn
						color="primary"
					>
						Save
					</v-btn>
				</v-col>
			</v-row>
		</v-card-title>

		<v-card-text>
			<v-form v-model="valid">
				<v-text-field
					v-model="user.firstName"
					label="First Name"
				/>
				<v-text-field
					v-model="user.lastName"
					label="Last Name"
				/>
				<v-text-field
					v-model="user.email"
					label="Email"
				/>
			</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'ProfilePanel',
	components: {
	},
	data: () => ({
		user: {
			firstName: 'firstName',
			lastName: 'lastName',
			email: 'email'
		}
	})
}
</script>

<style lang="scss" scoped>
.panel-container {
  height: 96vh;
  overflow-y: auto;
}
</style>
