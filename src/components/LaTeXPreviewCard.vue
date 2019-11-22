<template>
	<v-card 
    :style="customStyle"
  >
		<v-container>
			<LaTeXPreview
				:text="getText"
				:class="getMode === 'latex'? 'show' : 'hidden'"
			/>
			<v-textarea
				v-model="myText"
				auto-grow
				solo
				:class="getMode === 'latex' ? 'hidden' : 'show'"
				:value="getText"
			/>
		</v-container>
		<v-btn
			text
			@click="toggle"
		>
			{{ getMode === 'txt' ? 'Done' : 'Edit' }}
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
		customStyle: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		mode: {
			type: String,
			default: 'latex'
		},
        id: {
            type: String,
            default: '0'
        }
	},
	data () {
		return {
            myText: this.text,
            myMode: this.mode
		}
	},
	computed: {
		getMode: function () {
			return this.myMode
		},
		getText: function () {
			return this.myText
		}
	},
	methods: {
		toggle: function (event) {
			this.myMode = this.getMode === 'latex'	? 'txt' : 'latex'
            let obj = {id: this.id, mode: this.getMode, tex: this.getText}
            this.$emit('edited', obj)
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
