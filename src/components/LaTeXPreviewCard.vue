<template>
	<v-card>
		<v-container>
			<LaTeXPreview
				:text="text"
				:class="getMode === 'latex'? 'show' : 'hidden'"
			/>
			<v-textarea
				v-model="temp_text"
				auto-grow
				solo
				:class="getMode === 'latex' ? 'hidden' : 'show'"
				:value="getText"
			/>
		</v-container>
		<v-btn @click="toggle">
			{{ mode === 'txt' ? 'Done' : 'Edit' }}
		</v-btn>
	</v-card>
</template>

<script>
import LaTeXPreview from '@/components/LaTeXPreview'

export default {
	name: 'LaTeXPreviewCard',
	components: {
		LaTeXPreview
	},
	props: {
		'style': {
			type: String,
			default: ''
		},
		'text': {
			type: String,
			default: ''
		},
		'mode': {
			type: String,
			default: 'latex'
		}
	},
	data () {
		return {
			'temp_text': this.text
		}
	},
	computed: {
		getMode: function () {
			return this.mode
		},
		getText: function () {
			return this.text
		}
	},
	methods: {
		toggle: function (event) {
			this.mode = this.mode === 'latex'	? 'txt' : 'latex'
			this.text = this.temp_text
		}
	}
}
</script>
<style>
.show{
display: show}
.hidden{
	display: none
}
</style>
