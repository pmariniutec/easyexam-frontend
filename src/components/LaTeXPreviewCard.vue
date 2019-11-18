<template>
	<v-card
		:style="style"
	>
		<div
			class="latex-card"
			v-html="generateLaTeX"
		/>
	</v-card>
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
		}
	},
	data () { return {} },
	computed: {
		generateLaTeX: function () {
			let generator = parse(this.text, { generator: new HtmlGenerator({ hyphenate: false }) })
			return generator.htmlDocument('https://cdn.jsdelivr.net/npm/latex.js@0.11.1/dist/').documentElement.outerHTML
		}

	},
	methods: {}
}
</script>
<style>
	.latex-card {
		padding: 10px;
	}
</style>
