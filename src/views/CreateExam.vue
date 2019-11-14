<template>
	<v-container
		class="fill-height"
		fluid
	>
		<v-col
			class="fill-height"
			cols="15"
			sm="10"
			lg="7"
			md="7"
		>
			<v-row
				class="section-title"
			>
				New Exam
			</v-row>
		</v-col>
		<v-col
			class="fill-height"
			cols="3"
			sm="1"
			lg="3"
			md="3"
		>
			<v-row
				class="section-title"
			>
				Suggested Questions
			</v-row>
			<br>
			<div class="question">
				<div class="question-title">
					Question1
				</div>
				<div>
					Hola que tal me llamo jorge mucho gusto. Hola que tal me llamo jorge mucho gusto.
				</div>
			</div>
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
.section-title{
	padding: 20px;
	font-size: 20px;
	font-weight: bold;
	color: #23246E;
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
.question{
	background: #fff;
	border-radius: 10px;
	padding: 10px;
	width: 90%;
	font-size: 12px;
}
.question-title{
	color: #23246E;
	font-weight: bold;
	font-size: 14px;
}
</style>
