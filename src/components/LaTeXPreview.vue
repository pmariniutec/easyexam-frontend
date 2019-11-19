<template>
	<div
		v-html="generateLaTeX"
	/>
</template>

<script>
import { parse, HtmlGenerator } from 'latex.js'

export default {
	name: 'LaTeXPreview',
	props: {
		'text': {
			type: String,
			default: ''
		}
	},
	computed: {
		generateLaTeX: function () {
			let generator = parse(this.text, { generator: new HtmlGenerator({ hyphenate: false }) })
			return generator.htmlDocument('https://cdn.jsdelivr.net/npm/latex.js@0.11.1/dist/').documentElement.outerHTML
		},
		getText: function () {
			return this.text
		}
	}
}
</script>
