<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
	>
		<v-row no-gutters>
			<div class="go-back-container">
				<router-link
					:to="{name: 'courses'}"
				>
					<IconBack />
				</router-link>
			</div>
			  <div class="exam-editor-container"> <ExamEditorPanel />
			</div>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'

import ExamEditorPanel from '@/pages/ExamEditor/Panel'
import IconBack from '@/components/icons/IconBack'

export default {
	name: 'ExamEditor',
	components: {
		IconBack,
		ExamEditorPanel,
	},
	data: () => ({}),
	methods: {},
}
</script>

<style scoped>
	.exam-editor-container {
		width: 90%;
		height: 67%;
	}

	.go-back-container {
		height: 100%;
		width: 5%;
		padding: 25px 0 0 10px;
		margin: 0 20px 0 0;
	}
</style>
