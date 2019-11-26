<template>
	<div
		style="word-break: break-word;"
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
			let generator = new HtmlGenerator({ hyphenate: false })
			let doc = parse(this.text, { generator: generator }).htmlDocument()
			return doc.documentElement.outerHTML
		},
		getText: function () {
			return this.text
		}
	}
}
</script>
