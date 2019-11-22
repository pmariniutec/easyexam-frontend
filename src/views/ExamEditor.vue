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
                <v-card class="panel-card" >
                        <v-card-title primary-title >
                            <v-container>
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field
                                            v-model="getCurrentExam.title"
                                            label="Exam Title"
                                            append-icon="mdi-pencil"
                                            solo
                                        />
                                    </v-col>
                                    <v-col
                                        cols="6"
                                        align="right"
                                    >
                                        <v-dialog
                                            v-model="dialog"
                                            width="70%"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-btn
                                                    class="ma-2"
                                                    color="red lighten-2"
                                                    dark
                                                    v-on="on"
                                                >
                                                    Add Question
                                                </v-btn>
                                            </template>
                                            <CreateQuestionPanel
                                                @close-dialog="closeDialog"
                                            />
                                        </v-dialog>
                                        <v-btn
                                            color="secondary"
                                            class="ma-2"
                                            @click="previewExam()"
                                        >
                                            Preview
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            class="ma-2"
                                            @click="createExam()"
                                        >
                                            Save
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            v-model="userDetail.fullName"
                                            label="Teacher's name"
                                            disabled
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-autocomplete
                                            ref="course"
                                            v-model="course"
                                            :items="listCourses"
                                            label="Course"
                                            placeholder="Select..."
                                        />
                                    </v-col>
                                </v-row>
                            </v-container>

                            <CreateExamPanelQuestions :base-exam="getCurrentExam" @add-question="selectExam"/>
                        </v-card-text>
                    </v-card>
			</BaseContainer>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SideBar from '@/components/SideBar'
import BaseContainer from '@/components/BaseContainer'
import CreateExamPanelQuestions from '@/components/exam-editor/CreateExamPanelQuestions'
import CreateQuestionPanel from '@/components/exam-editor/CreateQuestionPanel'

export default {
	name: 'ExamEditor',
	components: {
		SideBar,
		BaseContainer,
        CreateExamPanelQuestions,
        CreateQuestionPanel
	},
    data: () => ({
           dialog: false 
     }),
	beforeMount: function () {
		let examId = this.$route.params.id
        if (examId) {
            this.getExamById({ examId }) 
        } 
	},
	methods: {
        ...mapActions('exam', {
            createExamAction: 'createExam', getExamByIdAction: 'getExamById',
            selectExamAction: 'selectExam', previewExamAction: 'previewExam' }),
        ...mapActions('auth', ['userDetail']),
        
        selectExam: function(exam) {
            this.selectExamAction(exam)
        },
		changeTab: function (href) {
		  this.$router.push({ name: href })
		},
		closeDialog: function () {
			this.dialog = false
		}
	},
    computed: {
        ...mapGetters('exam', ['getCurrentExam', 'getCurrentPreview']),
		...mapGetters('course', ['getCourseList',]),

		listCourses () {
			return this.getCourseList.map((courseData) => {
				return {
					text: courseData.name,
					value: courseData.id
				}
			})
		}
    }
}
</script>

<style scoped>
.sidebar-container {
  max-width: 180px;
}
	.exam-editor-container {
		margin: 55px 8% 0 0;
		width: 78%;
		height: 67%;
		background-color: #FFFFFF;
		padding: 40px 50px;
		border-radius: 14px;
		box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
	}
</style>
