<template>
	<div class="card-container">
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
		<v-btn
			text
			@click="toggle"
		>
			{{ getMode === 'txt' ? 'Done' : 'Edit' }}
		</v-btn>
	</div>
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
			type: Number,
			default: 0
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
			let obj = { id: this.id, mode: this.getMode, tex: this.getText }
			this.$emit('edited', obj)
		}
	}
}
</script>
<style>
	.card-container {
		width: 100%;
		padding: 5px;
	}

	.card-container:hover {
		border: #FFE3AD solid;
    border-radius: 6px;
		cursor: grab;
	}

	.show {
		display: show;
		width: 100%;
	}

.hidden{
	display: none
}
</style>
