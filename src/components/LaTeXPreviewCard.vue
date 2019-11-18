<template>
	<v-container>
		<div
			:class="getMode ? 'show' : 'hidden'"
			v-html="generateLaTeX"
		/>
		<div :class="getMode ? 'hidden' : 'show'">
			{{ text }}
		</div>
	</v-container>
</template>

<script>
import { parse, HtmlGenerator } from 'latex.js'

export default {
	name: 'LaTeXPreviewCard',
	components: {
	},
	props: {
		'style': {
			type: String
		},
		'text': {
			type: String
		},
		'mode': {
			type: String,
			default: 'latex'
		}
	},
	data () { return {} },
	computed: {
		generateLaTeX: function () {
			let generator = parse(this.text, { generator: new HtmlGenerator({ hyphenate: false }) })
			return generator.htmlDocument('https://cdn.jsdelivr.net/npm/latex.js@0.11.1/dist/').documentElement.outerHTML
		},
		getMode: function () {
			return this.mode === 'latex'
		}
	},
	methods: {}
}
</script>
<style>
.shoow{
display: show}
.hidden{
	display: none
}
</style>
