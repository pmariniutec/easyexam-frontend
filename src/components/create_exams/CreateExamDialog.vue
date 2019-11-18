<template>
	<div>
		<v-dialog
			v-model="dialog"
			width="500"
		>
			<template v-slot:activator="{ on }">
				<v-btn
					color="cyan"
					dark
					medium
					fixed
					bottom
					right
					fab
					v-on="on"
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</template>

			<v-card>
				<v-card-title
					primary-title
				>
					Create new exam
				</v-card-title>

				<v-divider />

				<v-card-text>
					<v-container>
						<v-row
							nogutters
						>
							<v-col lg="6">
								<v-text-field label="Title" />
								<v-text-field label="Course" />
								<v-text-field label="College" />
								<v-row
									nogutters
								>
									<v-col lg="6">
										<v-text-field label="Start time" />
									</v-col>
									<v-col lg="6">
										<v-text-field label="End time" />
									</v-col>
								</v-row>

								<v-row
									nogutters
								>
									<v-col lg="6">
										<DateField />
									</v-col>
									<v-col lg="6">
										<v-text-field label="Grading" />
									</v-col>
								</v-row>
							</v-col>
							<v-col lg="6">
								<v-text-field label="Teacher's name" />
								<v-text-field label="Course's code" />
								<v-textarea label="Keywords" />
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>

				<v-card-actions>
					<v-btn
						color="purple darken-4"
						rounded
						dark
						medium
						class="create-button"
						@click="dialog = false"
					>
						Create
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import DateField from '@/components/DateField'

export default {
	name: 'CreateExamDialog',
	components: {
		DateField
	},
	data: () => ({
		dialog: false
	})
}
</script>

<style scoped>
.create-button {
  margin: 0 0 10px 40%;
}
</style>
