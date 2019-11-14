<template>
	<v-container
		class="fill-height"
	  fluid
	>

		<v-col
			class="fill-height"
			cols="15"
			sm="11"
			lg="10"
			md="10"
		>
			<v-row
				class="exam-preview-title"
			>
				New Exam
			</v-row>
		</v-col>
		<v-col
			class="right-bar fill-height"
			cols="3"
			sm="1"
			lg="2"
			md="2"
		>
			<v-row>
				Score
			</v-row>
			<v-row
				class="score"
			>
				0/20
			</v-row>
			<br>
			<br>
			<v-row>
				Course
			</v-row>
			<v-row 
				class="score"
			>
				Introduction to Computer Science
			</v-row>
			<br>
			<br>
			<hr>
			<br>
			<v-row>
				Tags
			</v-row>
			<br>
			<v-row>
				<span
					class="tag"
				>
				tag1
				</span>
			</v-row>
		</v-col>

	</v-container>
</template>

<script>
export default {
	name: 'CreateExam',
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
.fix-align {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
}
.exam-preview-title{
	padding: 30px;
	font-size: 20px;
	font-weight: bold;
}
.v-chip.white {
	color: #fff;
}
.right-bar{
	background: #fff;
	padding: 30px;
}
.score{
	font-family: Helvetica;
	font-size: 14px;
	color: #666;
}
.tag{
	border-radius: 10px;
	background: #CA3536;
	color: #fff;
	padding: 5px 10px;
	margin: 5px;
}
</style>
