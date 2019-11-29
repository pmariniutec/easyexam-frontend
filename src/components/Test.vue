<template>
	<LaTeXPreview
		:content="localContent"
	/>
</template>

<script>
import LaTeXPreview from '@/components/LaTeXPreview'
export default {
	name: 'Test',
	components: {
		LaTeXPreview
	},
	data: () => ({
		localContent: '$$x^2$$'
	})
}
</script>
