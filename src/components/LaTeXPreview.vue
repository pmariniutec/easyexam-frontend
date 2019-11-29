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
      try {
			  let generator = new HtmlGenerator({ hyphenate: false })
			  let doc = parse(this.text, { generator: generator }).htmlDocument()
			  return doc.documentElement.outerHTML
      } catch (e) {
        return "<html>Invalid LaTeX code</html>"
      }
		},
		getText: function () {
			return this.text
		}
	}
}
</script>
