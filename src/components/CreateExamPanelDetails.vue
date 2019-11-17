<template>
	<v-form v-model="valid">
		<v-container>
			<v-row>
				<v-col
					cols="6"
				>
					<v-text-field 
            v-model="exam.title"
            label="Title"
          />
					<v-text-field
            v-model="exam.course"
            label="Course"
          />
					<v-text-field
            v-model="exam.college"
            label="College" 
          />
					<v-row>
						<v-col
							cols="6"
						>
							<v-text-field 
                v-model="exam.startTime"
                label="Start time" 
              />
						</v-col>
						<v-col
							cols="6"
						>
							<v-text-field 
                v-model="exam.endTime"
                label="End time"
              />
						</v-col>
					</v-row>
					<v-row>
						<v-col
							cols="6"
						>
							<DateField
                :date="exam.date"
              />
						</v-col>
						<v-col
							cols="6"
						>
							<v-text-field 
                v-model="exam.grading"
                label="Grading"
              />
						</v-col>
					</v-row>
				</v-col>
				<v-col
					cols="6"
				>
					<v-text-field 
            v-model="exam.teacherName"
            label="Teacher's name"
          />
					<v-text-field
            v-model="exam.courseCode"
            label="Course's code"
          />
					<v-textarea
            v-model="exam.keywords"
						label="Keywords"
						auto-grow
					/>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import DateField from '@/components/DateField'

export default {
	name: 'CreateExamPanelDetails',
	components: {
		DateField
	},
  data: () => ({
    exam: {
      title: '',
      course: '',
      college: '',
      startTime: '',
      endTime: '',
      date: new Date().toISOString().substr(0, 10),
      grading: '',
      teacherName: '',
      courseCode: '',
      keywords: '',
    },
    valid: false,
  }),
}
</script>

<style lang="scss" scoped>
</style>
